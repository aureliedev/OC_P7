/* IMPORT */
const postModel = require("../models/post");
const PostModel = require("../models/post");
const UserModel = require("../models/user");
const ObjectID = require("mongoose").Types.ObjectId; // Pr vérifier que le parametre passé existe dans la DB

/*----------------- GETPOST ---------------*/
module.exports.getPost = (req, res) => {
  PostModel.find((err, data) => {
    if (!err) res.send(data);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 }); // affichage des posts des +recent ou + ancien
};

/*----------------- CREATEPOST ---------------*/
module.exports.createPost = async (req, res) => {
  const newPost = new postModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

/*----------------- UPDATEPOST ---------------*/
module.exports.updatePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord }, //MAJ du message de l'user
    { new: true },
    (err, data) => {
      if (!err) res.send(data);
      else console.log("Erreur de MAJ : " + err);
    }
  );
};

/*----------------- DELETEPOST ---------------*/
module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  PostModel.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) res.send(data);
    else console.log("Erreur de supression : " + err);
  });
};

/*----------------- LIKE POST ---------------*/
module.exports.likePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(  // tableau des Posts

      req.params.id,
      {
        $addToSet: { likers: req.body.id }, //adtoset:  Pr ajouter une data au tableau des likers
      },
      { new: true },

      (err, data) => {
        if (err) return res.status(400).send(err);
      }
    );
    await UserModel.findByIdAndUpdate(   // tableau des users

      req.body.id,
      {
        $addToSet: { likes: req.params.id }, //adtoset:  Pr ajouter une data au tableau des like
      },
      { new: true },
      (err, data) => {
        if (!err) return res.send(data);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

/*----------------- DISLIKE POST ---------------*/
module.exports.dislikePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);
  try {
    await PostModel.findByIdAndUpdate(      // tableau des Posts

      req.params.id,
      {
        $pull: { likers: req.body.id }, //pull:  Pr retirer une data au tableau des likers
      },
      { new: true },

      (err, data) => {
        if (err) return res.status(400).send(err);
      }
    );
    await UserModel.findByIdAndUpdate(
      // tableau des users
      req.body.id,
      {
        $pull: { likes: req.params.id }, //pull:  Pr retirer une data au tableau des like
      },
      { new: true },
      (err, data) => {
        if (!err) return res.send(data);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

/*----------------- COMMENTAIRE DE POST ---------------*/
module.exports.commentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {        //on push dans le tableau des comments
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },

      (err, data) => {
        if (!err) return res.send(data);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

/*----------------- UPDATE COMMENTAIRE DE POST ---------------*/
module.exports.updateCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    return PostModel.findById(req.params.id, (err, data) => {
      const theComment = data.comments.find(
        (
          comment                                       //cherhce le comment'
        ) => comment._id.equals(req.body.commentId)             // detecte le comment'
      );

      if (!theComment) return res.status(404).send("Comment' pas trouvé"); //theComment est le comment' recherché
      theComment.text = req.body.text;

      return data.save((err) => {
        if (!err) return res.status(200).send(data);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

/*----------------- DELETE COMMENTAIRE DE POST ---------------*/
module.exports.deleteCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {        //pull:  Pr retirer une data au tableau des comments(le comment avec son id)
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true },

      (err, data) => {
        if (!err) return res.send(data);
        else return res.status(500).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};
