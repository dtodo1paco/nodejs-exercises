var express = require('express');
var router = express.Router();

const customerController = require('../controllers/customerController');
/* API DEFINITION */
/**
 * get all customers
 */
router.get('/', customerController.findAll);
/**
 * get a specific customer
 */
router.get('/:id', customerController.findOne);
/**
 * save a new customer
 */
router.post('/', function(req, res, next) {
  res.send('NOT YET IMPLEMENTED');
});
/**
 * update a customer
 */
router.put('/:id', customerController.update);
/**
 * deletes a customer
 */
router.delete('/:id',customerController.remove);

module.exports = router;
