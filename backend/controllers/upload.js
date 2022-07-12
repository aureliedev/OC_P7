/******************** CONFIGURATION DE L'UPLOAD ********************/
/* IMPORT */
const UserModel = require("../models/user");
const fs = require("fs"); //FileSysteme dependence native node.js
const { promisify } = require("util"); //library node.js
const pipeline = promisify(require("stream").pipeline); // stream.pipeline(): flux et rappel

/* fonction uploadProfil */
module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      /* vérification du format de l'image */
      req.file.detectedMimeType != "image/jpg" &&
      req.file.detectedMimeType != "image/png" &&
      req.file.detectedMimeType != "image/jpeg"
    )
      throw Error("Format d'image invalide !");

    /* vérification de la taille de l'image*/
    if (req.file.size > 500000) throw Error("Image trop volumineuse !");
  } catch (err) {
    return res.status(201).json(err);
  }
  /* Le nom du fichier: userId + date + .jpg */
  const fileName = req.body.userId + Date.now() + ".jpg";

  await pipeline(
    req.file.stream /* chemin de stockage de l'image */,
    fs.createWriteStream(
      `${__dirname}/../../frontend/public/uploads/profil/${fileName}`
    )
  );
  /* Chgt de l'image avec DataBase*/
  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "./uploads/profil/" + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
