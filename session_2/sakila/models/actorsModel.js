const dbConn = require('../config/db')
const SQL_FIND_ALL = "SELECT * FROM actor";

const SQL_FIND_BY_ID = id => {
  const a = `SELECT * FROM actor WHERE actor_id = ${id}`
  return a
};




const validate = data => {
  if (!data.fname) return false;
  return true;
}

function addActor (data) {

  return new Promise ( (resolve, reject) => {
    if (!validate(data)) reject("Invalid data");
    let sqlQuery = "INSERT INTO actor (first_name, last_name) VALUES ";
    sqlQuery += "('" + data.fname + "', '" + data.lname + "')";
    dbConn.query(
      sqlQuery,
      (err, result) => {
        console.log("Hay respuesta de la bd");
        if (err) reject(err);
        else resolve(result);
      }
    );
  })
}

module.exports = {
  addActor,
}