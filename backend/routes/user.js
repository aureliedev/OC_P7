/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");

/* AUTH */
router.post("/signup", authController.signUp);
/* USER */
router.get("/", userController.getAllUsers);

/* EXPORT */ 
module.exports = router;
