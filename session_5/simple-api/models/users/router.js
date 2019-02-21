var express = require('express');
var router = express.Router();

const Controller = require('./controller');

router.get('/', function(req, res, next) {
    res.send(Controller.findAll());
});

router.get('/id/:id', function(req, res, next) {
    const user = Controller.getByIndex(req.params.id);
    if (user) res.send(user);
    else res.send({"error": "element not found"});
});

router.post('/', function(req, res, next) {
  try {
    Controller.save(req.body.user);
    res.status(200).send("ok");
  } catch (e) {
    console.log("errors "+ e);
    res.status(400).send({"error": "unable to save", "message": e.toString() });
  }

});

module.exports = router;
