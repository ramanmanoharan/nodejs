const http = require('http')
const server = http.createServer((req, res)=>{
	res.end('Hello Node js')
});

server.listen(4000, ()=>{
	console.log('Server Started at Port 4000');
});