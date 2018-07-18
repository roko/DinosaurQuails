const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
    console.log('error')
});

db.once('open', function () {
    console.log('Server connected')
});

//TODO: ADD SCHEMAS

//TODO: ADD MODELS

//EXPORT MODELS 

module.exports.db = db;