var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {
  const username   = req.user.username;
  const fullname  = req.user.fullname;
    console.log("ss: " + JSON.stringify(req.sessionStore));
  res.render('user', { username: username, fullname: fullname, sessions: JSON.stringify(req.sessionStore.sessions, null, '  ') });
});

function isAuthenticated(req, res, next) {
  console.log("checking if user is authenticated")
  if (req.session.user)
    return next(); // pass to next middleware to handle the request
  console.log("... it is not auth");
  res.redirect('/login'); // redirect to login
}

module.exports = router;
