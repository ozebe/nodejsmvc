const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));
app.use(cors());

//rotas usadas como middleware
app.use('/', require('./routes/indexRoute.js'));

module.exports = app;