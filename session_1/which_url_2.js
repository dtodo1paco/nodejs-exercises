var http = require('http');
var url = require('url');

var myModule = require('./mods/myModule');

var server = http.createServer(function (req, res) {
  // empty object
  let a = {};
  // constant
  const vble1 = 'property1';
  // object property set vía constant or variable value
  a[vble1] = myModule.add(3,5);
  a['property2'] = myModule.sub(3,6);
  // below and above - module use for set properties with results
  console.log("sum: " + myModule.tristeA);

  // new empty object
  let b = {};
  // copy property between objects
  b.p1 = a.property1;

  // show in console object a
  console.log(JSON.stringify(a));

 var page = url.parse(req.url).pathname;
  console.log(page);
  if (page == '/') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Here’s the home page. How can I help you?');
  } else if (page == '/living_room') {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(a));
  } else if (page == '/floor/1/bedroom') {
    res.write('Hey, this is a private area!');
  }
  res.end();
});

server.listen(3000);
console.log("Server running on port 3000");
