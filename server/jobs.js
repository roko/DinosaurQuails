const db = require('../db/index.js');
const app = require('./index.js');



app.get('/jobs', function (req, res) {
  //render '/jobs'and current 'job' instances
});

app.post('/jobs', function (req, res) {
  //send req.miscFields to DB for new instance
});