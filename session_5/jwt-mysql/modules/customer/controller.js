// customerController.js
const model = require('./model');
const crypt = require('../../util/crypt-util');
const Token = require('../../auth/Token');

function doLogin(req, res) {
  const un = req.body.username;
  model.findByUsername(un)
    .then(result => { // username found ! Let's check the passwd
      if (result.length !== 1) {
        res.render('login', {message: {type: 'error', text: 'bad credentials'}});
      } else {
        const customer = result[0];
        const dbPwd = customer.password;
        const pwd = req.body.password;
        const cryptPasswd = crypt.encrypt(pwd);
        if (cryptPasswd !== dbPwd) {
          res.render('login', {message: {type: 'error', text: 'bad credentials'}});
        } else {
          res.render('user',{
            'message' : {text: 'Login success', type: 'info'},
            'username': un,
            'fullname': customer.fullname,
            'token': Token.buildToken(customer.id)
          });
        }
      }
    })
    .catch(err => {
      res.render('error', {message: {color: 'red', text: 'something failed'}, error: err});
    })
}

module.exports = {
  doLogin,
}