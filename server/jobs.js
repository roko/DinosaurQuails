const express = require('express');
const db = require('../db/index.js');
// const util = require('./helpers/utilities.js');

let router = express.Router();

const jobHelperQuery = (req, res) => {
  db.getJobs(req.query, (err, jobs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(404);
    }
    res.json(jobs);
  });
};

const jobPoster = (req, res) => {
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
    state: req.body.state || 'none',
    userId: req.body.userId,
    payRange: req.body.payRange || '$1,000,000,000',
    logoUrl: 'https://i.imgur.com/usLTbBq.png'
  };

  // util.logoGo(fieldInfo.webSite, (error, logoUrl) => {
  //   //If error is received (404)
  //   if(error) console.log('404, no image:', error)
  //   //If !logoUrl, set to default https://imgur.com/a/C9WPyup
  //   if(!logoUrl) fieldInfo['logoUrl'] =  'https://imgur.com/a/C9WPyup'
  //   //Else set key on fieldInfo object with current logoUrl
  //   else {
  //   fieldInfo['logoUrl'] = logoUrl;
  //   }
  //   //send req.miscFields to DB for new instance
  // });
      db.createJob(fieldInfo, (err, data) => {
        if (err) {
          console.log('Job Saver Error: ', err);
          res.sendStatus(500);
        } else {
          res.send('job saved!');
        }
      });
};

router.post('/jobs', jobPoster);

router.get('/jobs', jobHelperQuery);

router.delete('/jobs', (req, res) => {
  // add delete function to database
  // will rely upon params to delete by Id
});


module.exports = router;
