var express = require('express');
var router = express.Router();

const dbConnection = require('../config/db');
const dbConn = dbConnection();
const dbResponses = require('../util/dbResponses');

// this message will be executed whenever the server starts
console.log("WOOO");

/* GET users listing. */
router.get('/total', function(req, res, next) {
  dbConn.query("SELECT count(id) as totalCustomers from customer", (err, rows, fields) => {
    if (err) {
      res.send("An error ocurred when trying to get data from database: " + err);
    }
    const result = dbResponses.processCount(rows);
    res.send(result);
  });
});
router.get('/list', function(req, res, next) {
  dbConn.query("SELECT * from customer", (err, rows, fields) => {
    if (err) {
    res.send("An error ocurred when trying to get data from database: " + err);
  }
  const result = dbResponses.processCustomerList(rows);
  res.send(result);
});
});


router.get('/connect', function(req, res, next) {
  // connect to db
  dbConn.connect();
});

router.get('/disconnect', function(req, res, next) {
  if (dbConn) { // check that a previous connection exists
    db.end( (err) =>  {
      if (err) res.send("Error ending connection. Something really bad happened");
      res.end();
    });
  }
});

module.exports = router;
