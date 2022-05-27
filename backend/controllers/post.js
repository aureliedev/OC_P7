/* IMPORT */
const postModel = require("../models/post");
const PostModel = require("../models/post");
const UserModel = require("../models/user");
const ObjectID = require("mongoose").Types.ObjectId; // Pr vérifier que le parametre passé existe dans la DB

/*----------------- GETPOST ---------------*/
module.exports.getPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
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
module.exports.likePost = async (req, res) =>{

};

/*----------------- DISLIKE POST ---------------*/
module.exports.dislikePost = async (req, res) =>{
    
};