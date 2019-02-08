var express = require('express');
var controllerModule = require('./users')

var app = express();
app.use('/users', controllerModule);

app.get('/', function(req, res) {
  res.send('Hello from home!!')
});

app.listen(3000);
console.log('Express started on port 3000');
