const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('../db/index.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/jobs', function (req, res) {
  //render '/jobs'and current 'job' instances
});

app.post('/jobs', function (req, res) {
  //send req.miscFields to DB for new instance
});