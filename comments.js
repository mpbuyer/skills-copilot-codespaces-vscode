// create web server
var express = require('express');
var app = express();
// use body-parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// set static folder
app.use(express.static('public'));
// connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo');
// define model
var Comment = mongoose.model('Comment', {
  content: String});