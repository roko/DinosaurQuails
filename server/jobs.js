const db = require('../db/index.js');
const express = require('express');
const app = require('./index.js');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const jobs = express.Router();

const jobHelperDisplay = err => {
  if (err) console.log('Issue Rendering all jobs, check DB: ', err);
  res.send(db.Jobs.find());
};
const jobHelperQuery = (err, searchTerms) => {
  if (err) console.log('Job Query Error: ', err);
  res.send(db.Jobs.find(searchTerms));
  // get specific elements from db
  // //pass terms into find
  // res.send()
};

jobs.post('/jobs', function(req, res) {
  // const jobHelperSaver = (req, res) => {
  //TODO:
  //input calender modal into date
  //test this

  //create object of inputted fields first in case user left some fields blank so the entry still gets saved with 'none' as default value
  console.log('what is in the request', req.body);

  let fieldInfo = {
    name: req.body.name || 'none',
    jobTitle: req.body.title || 'none',
    webSite: req.body.website || 'none',
    email: req.body.email || 'none',
    phone: req.body.phone || 'none',
    recruiter: req.body.recruiter || 'none',
    postDate: req.body.postDate || new Date(),
    appliedDate: req.body.appliedDate || new Date(),
    interviewedDate: req.body.interviewedDate || new Date(),
    coverLetterUrl: req.body.coverLetterUrl || 'none',
    state: req.body.state || 'none'
  };

  //send req.miscFields to DB for new instance
  db.createJob(fieldInfo, (err, data) => {
    if (err) {
      console.log('Job Saver Error: ', err);
      res.sendStatus(500);
    } else {
      res.send('job saved!');
    }
  });
});

jobs.get('/jobs', jobHelperDisplay);
//render '/jobs'and current 'job' instance

// jobs.post('/jobs', jobHelperSaver);

module.exports = jobs;

module.exports.jobHelperQuery = jobHelperQuery;
