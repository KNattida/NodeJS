var express = require('express');
var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.use(express.static('web'));
console.log("server running port 8000");
