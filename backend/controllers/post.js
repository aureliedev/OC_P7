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
module.exports.updatePost = (req, res) => {};
/*----------------- DELETEPOST ---------------*/
module.exports.deletePost = (req, res) => {};
