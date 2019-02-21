const data = require('../../data/users');
const model = require('./model');
/**
 * return a valid index
 */
const getValidIndex = pos => {
  let i = 0;
  try {
    i = parseInt(pos) - 1;
  } catch (e) {
    console.err("Invalid index: " + pos);
  }
  return i;
}


class Controller {

  constructor() {}

  static findAll() {
    return data.users;
  }
  static getByIndex(i) {
    const user = data.users[getValidIndex(i)];
    if (!user) return null;
    return user;
  }

  static save(user) {
    if (user) {
      const requiredProps = model.properties.filter(elem => elem.required);
      requiredProps.forEach( prop => {
        const val = user[prop.name];
        if (!val) throw new TypeError(`missing value for: ${prop.name}`);
        if (typeof val != prop.type) {
          throw new TypeError(`invalid type for field: ${prop.name}`);
        }
      });
      data.users.push(user);
    } else throw new TypeError(`empty object to save`);
  }
}
module.exports = Controller;
