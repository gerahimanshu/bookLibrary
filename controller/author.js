"use strict";
module.exports = function(app){
	var AuthorModel = require('../model/author');

	var init = function(){
	
			
	};


	/**
	 * [authorList description]
	 * @param  {[type]}   filter   [description]
	 * @param  {[type]}   skip     [description]
	 * @param  {[type]}   limit    [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	var authorList = function(filter, skip, limit, callback){
		filter = filter || {};
		limit  = limit  || 10;
		skip   = skip   || 0;
		AuthorModel.find(filter).limit(limit).skip(skip).exec(callback);
	}
	
	/**
	 * Create and save an author to database
	 * @param  book {Object} contains book details
	 * @param  callback {Function} callback function with error and book argument
	 */
	var createAuthor = function(author,callback){
		if(!author.name){
			callback(new Error("Author name is required"), null);
		}else if(!author.phone){
			callback(new Error("Author Phone is required"), null);
		}else if(!author.address){
			callback(new Error("Author Address is required"), null);
		}else if(!author.email){
			callback(new Error("Author Email is required"), null);	
		}
		else{
			var authorObj = new AuthorModel({
				name:author.name,
				phone:author.phone,
				address:author.address,
				email:author.email
			});
			authorObj.save(function(err, obj){
				if(err)
					return console.log(err);
				authorObj.save(obj._id);	
				authorObj.save(callback);

			});	
		}
	};

	

		

	return {
		init: init,
		createAuthor: createAuthor,
		authorList: authorList

	}
};