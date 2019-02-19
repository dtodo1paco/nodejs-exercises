const express = require("express");
var bodyParser = require('body-parser')
let jsonParser = bodyParser.json();
const { BASE_URL } = require('./index')
const MODULE_BASE = "/restaurants/"
const BASE = BASE_URL + MODULE_BASE;

module.exports = (app, db) => {
  app.get( BASE, (req, res) =>
    db.restaurant.findAll()
      .then( (result) => res.json(result) )
  );

  app.get( BASE + ":id", (req, res) => {
    db.restaurant.findById(req.params.id)
      .then( (result) => res.json(result))
  });

  app.post(BASE, jsonParser, (req, res, next) =>
    db.restaurant.create({
      name: req.body.name,
      address: req.body.address,
      location_id: req.body.location_id,
    })
      .then( (result) => res.json(result) )
      .catch( (error) => next(error))
      //.catch( (error) => res.json({"error": "db error: " + error}))
  );

  app.put( BASE + ":id", (req, res) =>
    db.restaurant.update(
      {
        name: req.body.name,
        address: req.body.address,
        location_id: req.body.location_id,
      },
      {
        where: {
          id: req.params.id
        }
      },
    ).then( (result) => res.json(result) )
  );

  app.delete( BASE + ":id", (req, res) =>
    db.restaurant.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}



