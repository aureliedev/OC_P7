/* IMPORT */
const UserModel = require("../models/user");
const ObjectID = require("mongoose").Types.ObjectId; // Pr vérifier que le parametre passé existe dans la DB

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

/*----------------- updateUser ---------------*/
module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      // trouve l'element et MAJ
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
/*----------------- deleteUser ---------------*/
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "User supprimé !" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
