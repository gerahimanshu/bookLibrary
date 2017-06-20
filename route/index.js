"use strict"

module.exports = function(app){

	var controller = require("../controller")(app);
	var signinController = require("../controller/register")(app);
	var findName = require("../model/author")(app);

	var init = function()
	{
		route();
	};



	var route = function()
	{
		app.get('/index', function(req, res){
		    res.render('index');
		});


		app.get('/create_book', function(req, res){
		    res.render('create_book');
		});
		app.post('/createbook', function(req, res){
		    var book = req.body;
		    controller.book.createBook(book, function(error, book){
		    	console.log("Data received");
		    	if(error){
		    		//TODO:
		    		console.error(error);
		    		res.send(500, error.toString());

		    	}else{

		    		//Render the book page
		    		res.send("<p>Data added successfully</p>");	
		    	}	
		    })
		    
		});



		app.get('/create_author', function(req, res){
		    res.render('create_author');
		});
		app.post('/createauthor', function(req, res){
		    var author = req.body;
		    controller.author.createAuthor(author,function(error, author){
		    	console.log("Data received");
		    	if(error){
		    		//TODO:
		    		console.error(error);
		    		res.send(500, error.toString());

		    	}else{
		    		//Render the book page
		    		res.send("<p>Data added successfully</p>");	
		    	}	
		    })
		    
		});


		app.get('/create_category', function(req, res){
		    res.render('create_category');
		});

		app.post('/createcategory', function(req, res){
		    var category = req.body;
		    controller.category.createCategory(category, function(error, category){
		    	console.log("Data received");
		    	if(error){
		    		//TODO:
		    		console.error(error);
		    		res.send(500, error.toString());

		    	}else{

		    		//Render the book page
		    		res.send("<p>Data added successfully</p>");	
		    	}	
		    })
		    
		});

		app.get('/signin', function(req, res){
		    res.render('signin');
		});


		app.post('/signin', function(req,res){
			var signinData = req.body;
			signinController.signin(signinData, function(err, data){
				if(err){
		    		//TODO:
		    		console.error(err);
		    		res.send(err.toString());

		    	}else{

		    	}
			})
		})

		app.get('/register', function(req, res){
		    res.render('register');
		});

		app.post('/createregistration', function(req, res){
		    var register = req.body;
		    controller.register.createRegistration(register, function(error, registeration){
		    	console.log("Data received");
		    	if(error){
		    		//TODO:
		    		console.error(error);
		    		res.send(500, error.toString());

		    	}else{

		    		//Render the book page
		    		res.send("<p>Data added successfully</p>");	
		    	}	
		    })
		    
		});

		app.get('/list_of_books', function(req, res){
		    res.render('list_of_books');
		});


		
	}

	app.get('/create_book', function(req, res){
			controller.author.authorList({}, 0, 10, function(err, authorsa){
				if(err){
					res.error(err);
				}
				else{

					controller.category.categoryLists({}, 0, 10, function(err, categories){
						if(err){
							res.error(err);
						}
						else{
							res.render('create_book', {categorie: categories, authors: authorsa});
						}
					});	
				
				}
			});	
		});


	return{
		init:init
	}
};


