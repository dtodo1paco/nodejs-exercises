var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('users home');
});

router.get('/test', function(req, res) {
  res.send('users test');
});

module.exports = router;