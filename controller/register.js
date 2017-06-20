"use strict";
module.exports = function(app){
	var RegisterModel = require('../model/register');
	var Token = require('../model/token');
	var bcrypt = require('bcrypt');
	var uuidv4 = require('uuid/v4');
	const saltRounds = 10;

	var init = function(){
			
	};

	
	
	var createRegistration = function(register, callback){
		bcrypt.hash(register.password, saltRounds, function(err, hash) {	
		
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
				password:hash.toString()
			});
			registerObj.save(callback);	
		}
		});
	};



	var signin = function(signinData, callback){
			RegisterModel.findOne(
				{username:signinData.uname}, 'password',function(err, user){
					if(err)
						console.log(err);
					else{

						bcrypt.compare(signinData.password, user.password, function(err, res) {
    						if(res == false)
    							console.log("Unauthorized User");
    						else{
    							var uuid = uuidv4();
    							var accessToken = new Token(
    								{
    									createdOn: new Date(),
    									userId: user._id,
    									_id: uuid
    								}
    							)
    							accessToken.save();
    						}
    							
						});
					}
				} 
			)
	}

	return {
		init: init,
		createRegistration: createRegistration,
		signin: signin
	}
};