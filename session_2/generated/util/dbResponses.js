
const getTheFirst = data => data[0];
const getCustomerList = data => data.map( item => item.fullname);
module.exports = {
  processCount: getTheFirst,
  processCustomerList: getCustomerList
}