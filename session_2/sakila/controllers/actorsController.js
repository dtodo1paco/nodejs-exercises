const dbConn = require('../config/db')
const SQL_FIND_ALL = "SELECT * FROM actor";

const model = require('../models/actorsModel');

const SQL_FIND_BY_ID = id => {
  const a = `SELECT * FROM actor WHERE actor_id = ${id}`
  return a
};

const yaVereQueQueHago = (req, res) => {
  const last_name = req.body.lname;
  res.send("ya vere que hago");
}

function enviarAVerQueHago (req, res) {
  res.send("A ver que hago");
}
// in actors router
// router.post('/add', controller.addActor);

function addActor (req, res) {
  let data = req.body;
  console.log("daa¡ta¡¡¡¡: " + JSON.stringify(data))
  if (!data.fname) data = req.params;
  console.log("daa¡ta¡¡¡¡: " + JSON.stringify(data))


  model.addActor(data)
    .then ( result => {
      console.log("ha ido guay")
      res.redirect('/actors/list')
    })
    .catch( function(err) {
      console.log("no tan guay")
      res.send("vaya respuesta chunga")
   })
/*

  if (err) res.send(
    {"petasoooo": err}
  ); // TODO: send a better error message
  else {
    // the actor has been inserted ok
    //res.send(data);
    // TODO: show an updated list of actors
    res.redirect('/actors/list');

  }
*/
}

function get3A () {
  return "aaa";
}

function list (req, res, next) {

  dbConn.query(
    SQL_FIND_ALL,
    (err, result) => {
    console.log("Hay respuesta de la bd" + err);
  if (err) res.send(
    {"petasoooo": err}
  ); // TODO: send a better error message
  else {
    res.render('actorsTable',{ actors: result});
  }
}
);
console.log("enviando respuesta");
//res.send('actors list');
}

const getById = (req, res) => {
  const actorId = req.params.id;
  const sqlQuery  ="SELECT * FROM actor WHERE actor_id = " + actorId;
  dbConn.query(
    SQL_FIND_BY_ID(actorId),
    (err, result) => {
      console.log("Hay respuesta de la bd" + JSON.stringify(result));
      if (err) res.send(
        {"petasoooo": err}
      ); // TODO: send a better error message
      else {
        res.render('actorDetail',{ actor: result[0]});
      }
    }
  );
}
module.exports = {
  enviarAVerQueHago,
  yaVereQueQueHago,
  getById,
  list,
  addActor
};