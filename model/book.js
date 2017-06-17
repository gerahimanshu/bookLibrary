"use strict";

var mongoose = require('mongoose');
var a = require('./author');
var b = require('./category');

var book = mongoose.Schema({
   		title: String,
   		description: String,
   		isbn: Number,
   		image: Object,
   		author: String,
   		category: String,
   		author_id : [{ type: mongoose.Schema.Types.ObjectId, ref: 'a.author' }],
   		category_id : [{ type: mongoose.Schema.Types.ObjectId, ref: 'b.category' }] 
	});

module.exports = mongoose.model("book", book);
