var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api')

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( (req, res, next) => {
  console.log("La request es de tipo: " + req.method)
  if (req.body.myParam === 7) res.send("no puedes pasar!!")
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// ERROR HANDLING MIDDLEWARE
app.use(function(err, req, res, next) {
  console.error("LOG ERROR: " + err.message); // Log error message in our server's console
  if (err.redirectToHome) {
    res.redirect('/');
  } else {
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res
      .status(err.statusCode)
      .send(err.message);
  }
});

module.exports = app;
