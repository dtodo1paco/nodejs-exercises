// customerController.js
const customerModel = require('../models/customerModel');

function findAll(req, res) {
  customerModel.findAll( (err, result) => {
    if (err) res.send({message: 'something failed', error: err});
    res.send(result);
  });
}
function findOne(req, res) {
  const id = req.params.id;
  customerModel.findCustomerById(id)
    .then(result => {
      res.send(result);
    })
    .catch(e => {
      res.send({message: 'something failed', error: err});
    })
}

function save(req, res) {
  const newCustomer = {
    id: req.body.id,
    name: req.body.name
  }
  const totalCustomers = customerModel.count();
  if (totalCustomers > 10) {
    res.status(404).send({message: 'limit reached', error: 'no more customers allowed'});
  }
  customerModel.save(newCustomer);
  res.send(newCustomer);
}
function update(req, res) {
  console.log("updatingggg");
  const id = req.params.id;
  console.log("updatinggg: " + id);
  const customerData = {
    id: req.body.id,
    name: req.body.name
  }
  const customerUpdated = customerModel.update(id, customerData);
  console.log("after update: customers are: " + JSON.stringify(customerModel.findAll()));
  res.send(customerUpdated);
}
function remove(req, res) {
  const id = req.params.id;
  const customerRemoved = customerModel.remove(id);
  res.send(customerRemoved);
}

module.exports = {
  findAll,
  findOne,
  save,
  update,
  remove,
}