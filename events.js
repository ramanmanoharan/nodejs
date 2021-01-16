const http = require('http')
const server = http.createServer((req, res)=>{
	res.end('Hello Node js')
});


let events = require('events');

let eventEmitter = new events.EventEmitter();
eventEmitter.on('connection', ()=>{
	console.log('connected sucessfully');
});
eventEmitter.emit('connection');

server.listen(4000,()=>{
	console.log('Server Started at Port 4000');
});