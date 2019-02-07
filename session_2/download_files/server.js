var express = require('express')
  , logger = require('morgan')
  , app = express()
  , path = require('path')

app.use(logger('dev'))

app.get('/', function(req, res){
  res.send('<ul>'
  + '<li>Download <a href="/files/quixote.txt">quixote.txt</a>.</li>'
  + '<li>Download <a href="/files/missing.txt">missing.txt</a>.</li>'
  + '<li>Download <a href="/files/nytimes.pdf">nytimes.pdf</a>.</li>'
  + '</ul>');
});

// here, we get the final pathname to know the filename to look at
app.get('/files/:file(*)', function(req, res, next){
  var filePath = path.join(__dirname, 'files', req.params.file);
  res.download(filePath, function (err) {
    if (!err) return; // file sent
    if (err && err.status !== 404) return next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send('Cant find file: ' + filePath);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server on http://localhost:' + (process.env.PORT || 3000))
})
