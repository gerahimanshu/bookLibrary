"use strict";

var mongoose = require('mongoose');

var category = mongoose.Schema({
   		name: String
	});

module.exports = mongoose.model("category", category);