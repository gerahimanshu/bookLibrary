"use strict";
var mongoose = require('mongoose');

module.exports = function(app){
	
	var init = function(){
		mongoose.connect('mongodb://localhost/library');
		
	};
	
	/*app.get('/views/create_book', function(req, res){
   	res.render('book');
	});
*/
	return {
		init: init
	};
};