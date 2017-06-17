module.exports = function(app){

	var bookController = require("./book")(app);
	var authorController = require("./author")(app);
	var categoryController = require("./category")(app);
	var registerController = require("./register")(app);

	//Constructor method
	var init = function(){
	bookController.init();
	};

	return {	
		init: init, 
		book: bookController,
		author: authorController,
		category: categoryController,
		register: registerController
	};
};