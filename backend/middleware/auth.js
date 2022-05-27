/* IMPORT */
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");



/*----------- Check l'user a chaque action sur le site ---------------*/
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt; // on verifie le token dans le cookie
  if (token) {
    // si ya un token présent
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        console.log(res.locals.user);
        res.locals.user = user;
        next();
      }
    });
  } else {
    // si pas de token présent
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.send(500).json('PAS de token ici')
        } else {
          console.log(decodedToken.id);
          next();
        }
      });
    } else {
      console.log('Pas de token');
    }
  };