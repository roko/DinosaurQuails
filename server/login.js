const express = require('express');
const db = require('../db/index.js');
const app = require('./index.js');
const login = express.Router();

login.get('/login', function(req, res) {
  //render login page/modal
});

login.post('/login', function(req, res) {
  //send auth query to DB
  //if affirmed redirect to '/jobs'
});

module.exports = login;
