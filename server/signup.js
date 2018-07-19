const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bcrypt);

app.post('/signup', function (req, res) {
  //check for instance of user
    //if not, add new User to DB
  //Else render 'Username already taken' prompt
});

app.get('/signup', function (req, res) {
  //render signup modal
});