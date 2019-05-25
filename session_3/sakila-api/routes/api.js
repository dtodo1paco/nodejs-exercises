var express = require('express');
var router = express.Router();

const actorController = require('../modules/actor/controller')

/* GET home page. */
console.log("antes del fuego");
router.post('/actors/add', actorController.add);
router.get('/forbidden', function(req, res, next) {
  let err = new Error(`${req.ip} tried to access /api/forbidden`);
  err.statusCode = 403;
  next(err); // Note that this errors flows. No response is sent
});
router.get('/unauthorized', function(req, res, next) {
  let err = new Error(`${req.ip} tried to access /api/unauthorized`);
  err.statusCode = 401;
  err.redirectToHome = true;
  next(err); // Note that this errors flows. No response is sent
});
console.log("despues del fuego");
module.exports = router;
