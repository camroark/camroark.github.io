var express = require('express');
var client = require('./client/app.js');
var app = express();
var port = process.env.PORT || 8000;

app.listen(port);
console.log('Listening on port : ', port);

app.use(express.static(__dirname + "/client/"));
app.get('/', function(req, res) {
   res.sendFile('index.html');
})
