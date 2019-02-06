var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
res.writeHead(200, {"Content-Type": "text/plain"});
res.write('Well Hello');
res.end();
});
server.listen(3000);
console.log("Server running on port 3000");
