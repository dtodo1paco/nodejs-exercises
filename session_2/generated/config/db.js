/**
 * This module exports a new Connection to MySQL
 * Remember that "by design" a connection closed cannot be reused
 * @type {exports}
 */
const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'e.lefante',
    database: 'foodsaver',
  });
}