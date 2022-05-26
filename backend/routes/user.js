/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const authController = require("../controllers/auth");

/* Création des routes signup and login */
router.post("/signup", authController.signUp);

/* EXPORT */ 
module.exports = router;
