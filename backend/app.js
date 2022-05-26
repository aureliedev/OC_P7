/******************** CONFIGURATION DE L'APPLICATION EXPRESS********************/
/* IMPORT */
const express = require ('express');
const app = express();
const mongoose = require('mongoose')

/* CONFIG DOTENV */
require('dotenv').config({path: './config/.env'});
const username = process.env.dbUserName;
const password = process.env.dbPassword;
const db = process.env.DB_NAME;

/* Connexion à la base de données MongoDB */
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ndndt.mongodb.net/${db}?retryWrites=true&w=majority`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/* EXPORT */ 
module.exports = app;

