const db = require('../db/index.js');
const express = require('express');
const app = require('./index.js');
const bluebird = require('bluebird');
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

const jobHelperSaver = (req, res) => {
  //TODO:
  //input calender modal into date
  //test this

    //create object of inputted fields first in case user left some fields blank so the entry still gets saved with 'none' as default value
  let fieldInfo = {
    name: req.name || 'none',
    jobTitle: req.title || 'none',
    webSite: req.website || 'none',
    email: req.email || 'none',
    phone: req.phone || 'none',
    recruiter: req.recruiter || 'none',
    postDate: req.postDate || new Date(),
    appliedDate: req.appliedDate || new Date(),
    interviewedDate: req.interviewedDate || new Date(),
    coverLetterUrl: req.coverLetterUrl|| 'none',
    state: req.state || 'none'
    }

  //send req.miscFields to DB for new instance
  db.createJob(fieldInfo, (err, data) => {
    if (err) {
      console.log('Job Saver Error: ', err)
      res.sendStatus(500);
    } else {
      res.json('Job Saved!');
    }
  })
};

jobs.get('/jobs', jobHelperDisplay);
//render '/jobs'and current 'job' instance

jobs.post('/jobs', jobHelperSaver)


module.exports = jobs;

module.exports.jobHelperQuery = jobHelperQuery;
