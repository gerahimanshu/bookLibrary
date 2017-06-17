"use strict";

var mongoose = require('mongoose');

var author = mongoose.Schema({
   		name: String,
   		phone: Number,
   		address: String,
   		email: String
	});

module.exports = mongoose.model("author", author);