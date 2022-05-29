/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const uploadController = require("../controllers/upload");
const multer = require("multer");
const upload = multer();

/* ROUTES */
router.post("/signup", authController.signUp); // auth inscription
router.post("/login", authController.login); // auth connexion
router.get("/logout", authController.logout); // auth deconnection
/* USER */
router.get("/", userController.getAllUsers); // tous les users
router.get("/:id", userController.getOneUser); // Un user
router.put("/:id", userController.updateUser); // Modification d'user
router.delete("/:id", userController.deleteUser); // Suppression d'user
/* UPLOAD */
router.post("/upload", upload.single("file"), uploadController.uploadProfil); // upload

/* EXPORT */
module.exports = router;
