var http = require('http');

var visitCount = 0;
http.createServer(function (request, response) {
    console.log('New connection: is the number ' + visitCount);
    visitCount++;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+visitCount+' visits!\n');
    response.end();
}).listen(3000);
console.log('Server started on port 3000');

