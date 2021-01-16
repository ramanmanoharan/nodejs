let fs = require('fs')

fs.readFile('demo.txt', (error, data)=>{
	if(error)return console.log(error);
	console.log(data.toString());
})

console.log('Program Ended');