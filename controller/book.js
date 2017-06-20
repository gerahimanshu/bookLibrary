"use strict";
module.exports = function(app){
	var bookModel = require('../model/book');
	var x = require('../controller/author');

	var init = function(){
			
	};

	
	/**
	 * Create and save a book to database
	 * @param  book {Object} contains book details
	 * @param  callback {Function} callback function with error and book argument
	 */
	var createBook = function(book, callback){
		if(!book.title){
			callback(new Error("Book name is required"), null);
		}else if(!book.isbn){
			callback(new Error("Book isbn is required"), null);
		}else if(!book.image){
			callback(new Error("Book Cover Image is required"), null);
		}else if(!book.author){
			callback(new Error("Book Author is required"), null);
		}else if(!book.category){
			callback(new Error("Book Category is required"), null);			
		}else{
			var bookObj = new bookModel({
				title:book.title,
				description:book.description,
				isbn:book.isbn,
				image:book.image,
				author:book.author,
				category:book.category,
				author_id:book._id,
				category_id:book._id

			});
			bookObj.save(callback);	
		}
	};

	return {
		init: init,
		createBook: createBook
	}
};