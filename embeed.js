
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.render('index.ejs');
});
app.get('/about', (req, res)=>{
	res.render('about.ejs');
});

app.get('/contact', (req, res)=>{
	res.render('contact.ejs');
});
app.get('*', (req, res)=>{
	res.render('404.ejs');
});

app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000');
});