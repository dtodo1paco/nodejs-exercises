restaurantsController = require('../controllers/restaurant')

exports.appRoute = router => {
  router.get("/restaurants", restaurantsController.getRestaurants);
};
