var express = require('express');
var router = express.Router();
var formidable = require('formidable');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/profile', function(req, res, next) {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
    const whereTheFileWillBe = __dirname + '/../uploads/' + file.name;
    file.path = whereTheFileWillBe;
    console.log("File is uploading... to: [" + whereTheFileWillBe +"]")
  });

  form.on('file', function (name, file){
    console.log('Uploaded ' + file.name);
  });
  res.redirect('/users/');
});

module.exports = router;
