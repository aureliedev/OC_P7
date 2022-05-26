/* IMPORT */ 
const UserModel = require("../models/user");
const ObjectID = require("mongoose").Types.ObjectId;

/*----------------- GETALLUSERS ---------------*/ 
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password'); //'-password n'envoie pas le MDP a la db
    res.status(200).json(users);
  };