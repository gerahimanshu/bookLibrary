module.exports = function(app){

	var bookController = require("./book")(app);
	var authorController = require("./author")(app);
	var categoryController = require("./category")(app);
	var registerController = require("./register")(app);
	var listOfBooksController = require("./list_of_books")(app);

	//Constructor method
	var init = function(){

	};

	return {	
		init: init, 
		book: bookController,
		author: authorController,
		category: categoryController,
		register: registerController,
		listOfBooks: listOfBooksController
	};
};