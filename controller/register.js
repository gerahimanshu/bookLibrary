"use strict";
module.exports = function(app){
	var RegisterModel = require('../model/register');

	var init = function(){
			
	};

	
	
	var createRegistration = function(register, callback){
		if(!register.fname){
			callback(new Error("First Name is required"), null);
		}else if(!register.lname){
			callback(new Error("Last Name is required"), null);	
		}else if(!register.username){
			callback(new Error("username is required"), null);
		}else if(!register.password){
			callback(new Error("Password is required"), null);
		}
		else{
			var registerObj = new RegisterModel({
				fname:register.fname,
				lname:register.lname,
				username:register.username,
				password:register.password
			});
			registerObj.save(callback);	
		}
	};

	return {
		init: init,
		createRegistration: createRegistration
	}
};