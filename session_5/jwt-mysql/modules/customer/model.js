const dbConn = require('../../config/dbconn');
const TABLE = "customer"
const SQL_FIND_BY_USERNAME = (un) => `select * from ${TABLE} WHERE username = '${un}'`;

const findByUsername = un => {
  const theQuery = SQL_FIND_BY_USERNAME(un);
  return new Promise((resolve, reject) => {
    dbConn.query(theQuery, (err, result) => {
    if (err) reject(err);
    resolve(result);
    })
  });
}

module.exports = {
  findByUsername,
}