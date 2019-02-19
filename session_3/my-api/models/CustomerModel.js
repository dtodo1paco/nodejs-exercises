const db = require('../config/mysql')

const TABLE = "customer";
const Q_FIND_ALL = `SELECT * from ${TABLE}`;

// Customer object constructor
var Customer = function(task){
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

function findAll(cb) {
  db.query(Q_FIND_ALL, function (err, results) {
    // return results to caller
    cb(err, results);
  });
}

module.exports = {
  findAll,
};