/******************** CONFIGURATION DE L'APPLICATION EXPRESS********************/
/* IMPORT */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { checkUser, requireAuth } = require("./middleware/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const cors = require("cors");

const app = express();

/* CONFIG DOTENV */
require("dotenv").config({ path: "./config/.env" });
const username = process.env.dbUserName;
const password = process.env.dbPassword;
const db = process.env.DB_NAME;

/* Connexion à la base de données MongoDB */
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.ndndt.mongodb.net/${db}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

/* Config CORS pour les requetes */
const corsOption = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOption));

//bodyParser: pr traiter la data en transit
app.use(bodyParser.json()); // Pr mettre la req au bon format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//JWT
app.get("*", checkUser); // Pr assurer la sécurité de connexion de l'user sur toutes les routes
app.get("/jwtid", requireAuth, (req, res) => {
  console.log(requireAuth);
  res.status(200).send(res.locals.user._id);
});

//ROUTES
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

/* EXPORT */
module.exports = app;
