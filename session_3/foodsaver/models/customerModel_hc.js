const dbConn = require('../config/mysql');
const TABLE = "customer"
const SQL_FIND_ALL = "select * from " + TABLE;
const SQL_FIND_BY_ID = (id) => "select * from " + TABLE + " WHERE id = " + id;
/**
 *
 */
const findAll = (cb) => {
  dbConn.query(SQL_FIND_ALL, (err, res) => {
    if (err) cb(err, null);
    cb(null, res);
  });
};

const findCustomerById = id => {
  const theQuery = SQL_FIND_BY_ID(id);
  return new Promise((resolve, reject) => {
    dbConn.query(theQuery, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  });
}

const removeCustomerById = id => customers.splice(customers.findIndex(cust => cust.id == id), 1);

module.exports = {
  findAll,
  findCustomerById,
  removeCustomerById
}