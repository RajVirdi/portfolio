var express = require('express')
var socket = require('socket.io')
var fs = require('fs')
  

// app set          up
var app = express();

var server = app.listen(5000, function(){
  console.log('Connected');
});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);
