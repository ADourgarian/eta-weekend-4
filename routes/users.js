var express = require('express');
var router = express.Router();
var db = require('../data/mongo.js');
/* GET users listing. */

router.post('/', function(req, res, next) {
  var Applicant = {
    applyFor: req.body.application[0].personal,
    employmentHistory: req.body.application[0].employmentHistory,
    skills: req.body.application[0].skills
  };
  db.applicants.insert(Applicant);
  console.log('this ran');
  res.send()
});

router.get('/', function(req, res, next) {
  var results = db.applicants.find(); //cursor of results
  var array = results.toArray(function(err, arr) {
    var doc = arr;
    res.json(doc);
    console.log(doc);
  });
});

router.delete('/', function(req, res, next){
  var _id = req.body._id;
  console.log(_id);
  db.applicants.remove({_id: _id}, true);
  res.send()
});


router.delete('/', function(req, res, next){
  var twit = req.body.twitter;
  console.log(twit);
  db.users.remove({twitter: twit}, true);
  res.send()
});



module.exports = router;
