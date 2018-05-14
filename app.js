var express = require('express');
const bodyParser = require("body-parser");
var app = express();
var server = require('http').Server(app);
server.listen(8000);
const birds = require('./birds');

app.use(express.static('web'));
console.log("server running port 8000");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/birds", birds);

app.get('/he*',function(req,res,next){
    console.log("Hello from all logs");
    next();
});

app.get('/hello',function(req,res){
    console.log(req.query);
    res.end("Hello World alone...."+req.query.userName);
});

app.get('/hello/:userName',function(req,res){
    console.log(req.params);
    res.end("Hello World ...."+req.params.userName);
});

app.post('/hello',function(req,res){
    let obj = {
        code : '101',
        name : req.body.userName
    }
    res.json(obj);
//    console.log(req.body);   //จะได้ข้อมูลออกมาเป็นก้อน
//    res.end("Hello World from POST ....")
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
