const mysql        = require('mysql');
const connection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : "localhost",
  user     : "test",
  password : "e.lefante",
  database : "foodsaver"
});

module.exports = connection;
