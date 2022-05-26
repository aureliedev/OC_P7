/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");

/* ROUTES */
router.post("/signup", authController.signUp); // auth signup
/* USER */
router.get("/", userController.getAllUsers); // tous les users
router.get("/:id", userController.getOneUser); // Un user
router.put("/:id", userController.updateUser); // Modification d'user

/* EXPORT */ 
module.exports = router;
