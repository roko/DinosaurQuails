const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'jurassic eggs',
  cookie: {secure: true}
}));

app.get('/login', function (req, res) {
 //render login page/modal
});

app.post('/login', function (req, res) {
//send auth query to DB
  //if affirmed redirect to '/jobs'
});
