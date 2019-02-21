const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Session management with passport
const passport = require('passport');
const expressSession  = require('express-session');
// store sessions using a custom store (Redis is better choice)
const Store = require('express-session').Store
const BetterMemoryStore = require('./auth/memory')
const store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true })

// import all Auth stuff
const auth = require("./auth/");
const localStrategy = auth.localStrategy;

// flash messages on request
const flash    = require('connect-flash');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

////////////////////////////////////////////
// middleware
////////////////////////////////////////////
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// REMEMBER, keep order. It's important for express
// Session management
app.use(expressSession({
    name: 'JSESSION',
    secret: 'shhhh, very secret word',
    store:  store,
    resave: true,
    cookie: {
        secure: false
    },
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// to flash messages
app.use(flash());

// routes
app.use('/', index);
app.use('/users', users);

//passport Strategy
passport.use('local', localStrategy);
passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);

/////////////////////////////////////////////////////
// path handlers. Maybe a /auth part will be nice
/////////////////////////////////////////////////////
app.get('/login', function(req, res){
  res.render('login/index',{'message' :req.flash('message')});
});
app.post("/login", passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/login',
        failureFlash: true
    }), function(req, res, info) {
    res.render('user',{'message' :req.flash('message')});
});
app.get('/logout', function(req, res) {
    req.session.destroy();
    req.logout();
    res.redirect('/login');
});

/////////////////////////////////////////////////////
// error handlers
/////////////////////////////////////////////////////
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  console.log("Errorrrr: " + err + " :: " + req.app.get('env'));
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
