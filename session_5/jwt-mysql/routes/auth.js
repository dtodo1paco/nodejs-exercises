var express = require('express');
var router = express.Router();

const customerController = require('../modules/customer/controller');

router.get('/login/', function(req, res){
  res.render('login/index',{'message' : null});
});
router.post("/login", customerController.doLogin);
router.get('/logout', function(req, res) {
  res.redirect('login');
});

module.exports = router;