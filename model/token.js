"use strict";

var mongoose = require('mongoose');
var a = require('./register');
var accessToken = mongoose.Schema({
   		_id: String,
   		createdOn: Date,
   		userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'a.register'}]
	});

module.exports = mongoose.model("accessToken", accessToken);