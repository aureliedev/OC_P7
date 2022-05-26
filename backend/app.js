/******************** CONFIGURATION DE L'APPLICATION EXPRESS********************/
/* IMPORT */
const express = require ('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');


/* CONFIG DOTENV */
require('dotenv').config({path: './config/.env'});
const username = process.env.dbUserName;
const password = process.env.dbPassword;
const db = process.env.DB_NAME;

/* Connexion à la base de données MongoDB */
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ndndt.mongodb.net/${db}?retryWrites=true&w=majority`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//bodyParser: pr traiter la data en transit
app.use(bodyParser.json());// Pr mettre la req au bon format
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/api/user', userRoutes);

/* EXPORT */ 
module.exports = app;

