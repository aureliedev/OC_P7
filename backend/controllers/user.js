/* IMPORT */
const UserModel = require("../models/user");
const ObjectID = require("mongoose").Types.ObjectId;

/*----------------- getAllUsers ---------------*/
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); //'-password n'envoie pas le MDP a la db
  res.status(200).json(users);
};

/*----------------- getOneUser ---------------*/
module.exports.getOneUser = (req, res) => {
  console.log(req.params);
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  UserModel.findById(req.params.id, (err, data) => {
    if (!err) res.send(data);
    else console.log("ID inconnu : " + err);
  }).select("-password");
};
