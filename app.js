const express = require('express');
const app = express();
require('./db');

// Middleware function
app.bodyParser(json());
app.use( function (req, res, next) {

    if (err) throw err
    console.log('Middleware is running');
    next();
})


app.post()

app.get('/', function(req, res) {
    res.send('<h1 style="font-size: 60px; color: grey; width: 600px; margin:70px auto; text-align:center; ">Hello, World!</h1>');
});

app.get('/skills', function(req, res) {
    res.send('<h1 style="font-size: 60px; color: grey; width: 600px; margin:70px auto; text-align:center; ">Hello, World!</h1>');
});
app.get('/Experience', function(req, res) {
    res.send('<h1 style="font-size: 60px; color: grey; width: 600px; margin:70px auto; text-align:center; ">Hello, World!</h1>');
});
app.get('/Education', function(req, res) {
    res.send('<h1 style="font-size: 60px; color: grey; width: 600px; margin:70px auto; text-align:center; ">Hello, World!</h1>');
});
app.get('/about', function(req, res) {
    res.send('<h1 style="font-size: 60px; color: grey; width: 600px; margin:70px auto; text-align:center; ">Hello, World!</h1>');
});


// Initiated a port to 3000
app.listen(3000, function() {
    console.log('Server is running successfully');
});