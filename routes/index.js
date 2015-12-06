var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

module.exports = router;
