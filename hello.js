var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello, I'm a nodeJS server.");
	response.end();
}).listen(9999);
console.log('Listening on port 9999...');
