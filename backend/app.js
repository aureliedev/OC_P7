const express = require ('express');
const app = express();
//config dotenv
require('dotenv').config({path: './config/.env'});

// EXPORT
module.exports = app;