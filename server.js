"use strict"

var express 	= require('express');
var bodyParser 	= require('body-parser');
var multer 		= require('multer');

var modelObject = require("./model");
var routes 		= require("./route");
var controller 	= require("./controller");
var upload 		= multer();
var app 		= express();



app.set('view engine', 'ejs');
app.set('views','./views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));


// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));



modelObject(app).init();
controller(app).init();
routes(app).init();



app.listen(3000);

