const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('error');
});

db.once('open', function() {
  console.log('Server connected');
});

//TODO: ADD USER SCHEMA
let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  jobs: [job]
});

//TODO: ADD USER MODEL
let User = mongoose.model('User', userSchema);

// ADD JOB SCHEMA
let jobSchema = mongoose.Schema({
  userId: String,
  company: {
    name: String,
    jobTitle: String,
    webSite: String
  },
  contact: {
    email: String,
    phone: String,
    recruiter: String
  },
  postDate: Date,
  appliedDate: Date,
  interviewedDate: Date,
  coverLetterUrl: String
});

// ADD JOB MODEL
let Job = mongoose.model('Job', jobSchema);

//EXPORT MODELS

module.exports.db = db;
