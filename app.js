var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Create our app
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', function(req, res, next) {
	res.send("Hey there, this is an ansible demo");
});

app.listen(4000, function () {
  console.log('Express server is up on port ' + 4000);
});
