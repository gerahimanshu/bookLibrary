"use strict";
module.exports = function(app){
	var CategoryModel = require('../model/category');

	var init = function(){
			
	};

	
	/**
	 * Create and save a category of Book to database
	 * @param  book {Object} contains book details
	 * @param  callback {Function} callback function with error and book argument
	 */
	
	var categoryLists = function(filter, skip, limit, callback){
		filter = filter || {};
		limit  = limit  || 10;
		skip   = skip   || 0;
		CategoryModel.find(filter).limit(limit).skip(skip).exec(callback);
	}

	var createCategory = function(category, callback){
		if(!category.name){
			callback(new Error("Category name is required"), null);
		}
		else{
			var categoryObj = new CategoryModel({
				name:category.name,
			});
			categoryObj.save(callback);	
		}
	};

	return {
		init: init,
		createCategory: createCategory,
		categoryLists: categoryLists
	}
};