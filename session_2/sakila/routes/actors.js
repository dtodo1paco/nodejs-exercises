var express = require('express');
var router = express.Router();

const controller = require('../controllers/actorsController')



const dbConn = require('../config/db')

const dbOperation = theQuery => {
  return new Promise((resolve, reject) => {
    dbConn.query(theQuery, (err, result) => {
      if (err) reject(err)
      else resolve(result);
    })
  })
}
router.get('/promise', (req, res) => {
  const myPromise = dbOperation("SELECT * from actor");
  myPromise
    .then(function (result) {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
  })
});

/* GET users listing. */

router.get('/', (req, res) => res.redirect('list'));
// this redirect includes /actors because is the base for this router

router.post('/add', controller.addActor);
router.get('/add/:fname/:lname', controller.addActor);

router.get('/new', (req, res) => {
  res.render('newActor', {});
});
//OP 1
router.get('/list', controller.list);
router.get('/:id', controller.getById);








module.exports = router;
