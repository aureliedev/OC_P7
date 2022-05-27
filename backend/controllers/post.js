/* IMPORT */
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
module.exports.createPost = (req, res) => {};
/*----------------- UPDATEPOST ---------------*/
module.exports.updatePost = (req, res) => {};
/*----------------- DELETEPOST ---------------*/
module.exports.deletePost = (req, res) => {};
