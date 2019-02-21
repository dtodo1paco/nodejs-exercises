var faker = require('faker');

const generateAddress = () => {
    const address = {};
    address.streetName = faker.address.streetName();
    address.city = faker.address.city();
    address.zipCode = faker.address.zipCode();
    address.country = faker.address.country();
    return address;
}

const generateUser = () => {
    const user = {};
    user.name = faker.name.findName();
    user.email =  faker.internet.email();
    user.address = generateAddress();
    user.phoneNumber = faker.phone.phoneNumber();
    user.role = faker.lorem.word();
    return user;
}

const generateUsers = howMany => {
    const users = [];
    for(var i = 0; i < howMany; i++) {
        users.push(generateUser());
    }
    return users;
}
const users = generateUsers(5);

module.exports = {
    users
};