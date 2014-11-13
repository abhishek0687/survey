
/*
 * GET home page.

 */

var cookieParser = require('cookie-parser');

module.exports = function(server,app,express){
	var counter = 0;
	//var user[] = {'abhi';'avi';'mohan';'raj';'ram';'mohan';'shayam'};

	app.use(cookieParser());
//	app.use(express.bodyParser());

	app.get('/', function(req, res) {
		//req.cookies.check = ++counter;
		res.render('home');
	});

	app.post('/chat', function(req, res) {
	//	console.log(1);
	//	var randomFortune = fortune.getFortune;
		console.log(req.body);
		res.render('about');
	});

	// 404 catch-all handler (middleware)
	app.use(function(req, res, next){
		res.status(404);
		res.render('404');
	});

	// 500 error handler (middleware)
	app.use(function(err, req, res, next){
		console.error(err.stack);
		res.status(500);
		res.render('500');
	});

}
