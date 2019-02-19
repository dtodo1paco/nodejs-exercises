var mysql = require("mysql");
// create connection to database
const dbConn = mysql.createConnection ({
  host: 'localhost',
  user: 'test',
  password: 'e.lefante',
  database: 'foodsaver'
});

// connect to database
dbConn.connect(err => {
  if (err) throw err;
});

console.log('Connected to database');

// export db to have it available in every module
module.exports = dbConn;
