const http = require('http')
const casual = require('casual')
const server = http.createServer((req, res)=>{
	res.end('This is mycity '+casual.city);
});

server.listen(4000,()=>{
	console.log('Server Started at Port 4000');
});