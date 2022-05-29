/* IMPORT */
const UserModel = require("../models/user");
const fs = require("fs"); // pr traiter les files
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
  /* Controle du format et la taille de l'image */
  try {
    /* si les images ne sont pas egales aux formats, jpg, jpeg, png : throw err*/
    if (
      req.file.detectedMimeType != "image/jpg" &&
      req.file.detectedMimeType != "image/png" &&
      req.file.detectedMimeType != "image/jpeg"
    )
      throw Error("invalid file");
    /* si la taille des images fait plus de 500 000ko  throw err*/
    if (req.file.size > 500000) throw Error("max size");
  } catch (err) {
    return res.status(500).json({ message: err });
  }
  /* les images auront le nom de cette dernier et le format en .jpg*/
  const fileName = req.body.name + ".jpg";

  /* Creation du chemin pour stokers les images*/
  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../frontend/public/uploads/profil/${fileName}`
    )
  );
};
