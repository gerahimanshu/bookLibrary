"use strict";

var mongoose = require('mongoose');

var register = mongoose.Schema({
		fname: String,
		lname: String,
   		username: String,
   		password: String
   		
	});



module.exports = mongoose.model("register", register);