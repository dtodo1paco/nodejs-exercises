
var userModel = require(...models/user);


function save(req) {

  var user_id = req.field.user_id;
  // delete userid
  await userModel.delete(user_id)
  // save user

}

module.exports =  {
  save
}