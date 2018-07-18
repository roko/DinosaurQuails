const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

//Setup Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'jurassic eggs',
  cookie: {secure: true}
}));

//Setup Headers

//Serve static files
app.use(express.static(__dirname + '/../client/dist'));
//Establish routes

//sign up
app.post('/signup', function (req, res) {

});
app.get('/signup', function (req, res) {

});
//log in
app.get('/login', function (req, res) {

});
app.post('/login', function (req, res) {

});

//jobs
app.get('/jobs', function (req, res) {

});
app.post('/jobs', function (req, res) {

});


//Establish port#
app.listen(3000, function() {
  console.log('now listening on port 3000');
});

module.exports.app = app;


