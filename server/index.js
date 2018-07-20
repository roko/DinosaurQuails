const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const app = express();

//Setup Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'jurassic eggs',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  })
);

//Establish routes
// app.use('/jobs', require('./jobs'));

app.post('/signup', require('./signup.js'));
app.get('/signup', require('./signup.js'));

app.post('/login', require('./login.js'));
app.get('/login', require('./login.js'));
//Serve static files
app.use(express.static(__dirname + '/../client/dist'));

//Establish port#
app.listen(3000, function() {
  console.log('now listening on port 3000');
});

//save update
module.exports = app;
