const http = require('http');
var express = require('express');
var app = express();
 
app.get('/', function(request, response){
    // response.send('<h1>Homepage</h1><div>This is homepage.</div>'); // you can also directly write HTML content
    response.sendFile(__dirname + '/index.html');
});
 
app.get('/about', function(request, response){    
    response.sendFile(__dirname + '/about.html');
});
 
app.get('/contact', function(request, response){    
    response.sendFile(__dirname + '/contact.html');
});
app.get('*', function(request, response){
	response.sendFile(__dirname + '/404.html');
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);