var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>My Node.js page!</title>'+
' </head>'+ 
' <body>'+
' <p>Here <h1>is</h1> a paragraph of <strong>HTML</strong>!</p>'+
' </body>'+
'</html>');
res.end();
});
server.listen(3000);
console.log("Server running on port 3000");
