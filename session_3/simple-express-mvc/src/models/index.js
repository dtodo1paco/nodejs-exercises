const Sequelize = require('sequelize')
const sequelize = require('../config/mysql');

const LocationModel = require('./location')
const RestaurantModel = require('./restaurant')

const Location = LocationModel(sequelize, Sequelize)
const Restaurant = RestaurantModel(sequelize, Sequelize)

Restaurant.belongsTo(Location); // will add a location_id to Restaurant

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`)
})

module.exports = {
  Restaurant,
  Location,
}
