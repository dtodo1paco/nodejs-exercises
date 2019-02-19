const { Restaurant, Location } = require('../models/index')

exports.getRestaurants = (req, res, next) => {
  console.log("controller searching restaurants");

  Restaurant.findAll({
    include: [{
      model: Location,
    }]
  }).then(restaurants => {
    console.log(`${restaurants.length} results arrived!`);
    res.render('restaurants', { restaurants })
  });
  console.log("controller work done! When the data is ready, it will be rendered");
};
