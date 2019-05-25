const model = require('./model');
const add = (req, res) => {

  model.save(req.body)
    .then( result => {
      res.send({
        type: "success",
        data: result
      });
    })
    .catch( e => {
      res.send({
        type: "error",
        data: e
      });
    });
};

module.exports = {
  add
};


