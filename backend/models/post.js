/******************** CONFIGURATION DE POST MODEL ********************/
/* IMPORT*/
const mongoose = require('mongoose');

/* Creation de post schema */
const PostSchema = new mongoose.Schema(
    {
      posterId: {
        type: String,
        required: true
      },
      message: {
        type: String,
        trim: true, // Pr supprimer les espaces a la fin d'un pseudo par ex
        maxlength: 500,
      },
      picture: {
        type: String,
      },
      video: {
        type: String,
      },
      likers: {
        type: [String],
        required: true,
      },
      comments: {
        type: [
          {
            commenterId:String,
            commenterPseudo: String,
            text: String,
            timestamp: Number,
          }
        ],
        required: true,
      },
    },
    {
      timestamps: true, // date de creation et date de update
    }
  );

  /* EXPORT */
  module.exports = mongoose.model('post', PostSchema);