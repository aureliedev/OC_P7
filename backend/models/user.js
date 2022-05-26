/******************** CONFIGURATION DE USER MODEL ********************/
/* IMPORT*/
const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Pr valider l'email
const bcrypt = require('bcrypt');

/* Creation de user schema */
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true // Pr supprimer les espaces a la fin d'un pseudo par ex
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true, // Sera en minuscule
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png"
    },
    bio :{
      type: String,
      max: 1024,
    },
    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    }
  },
  {
    timestamps: true, // date de creation et date de update
  }
);
// Bcrypt
userSchema.pre("save", async function(next) { // crypt le MDP avec de l'enregistrer en DB
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});



const UserModel = mongoose.model("user", userSchema);

/* EXPORT */
module.exports = UserModel;




