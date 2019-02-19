

const logDate = function (req, res, next) {
  console.log("Date: " +  new Date());
  next();
};


module.exports = {
  logDate
}
