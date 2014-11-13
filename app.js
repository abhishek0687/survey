var express = require('express');
var http = require('http');
var socket = require('./lib');
var routes = require('./routes');
var bodyParser = require('body-parser');

var fortune = require('./lib/fortune.js');
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

var app = express();
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server=http.Server(app).listen(app.get('port'),function(){
  console.log('Express server listening ');
});


socket(server,app);

routes(server,app,express);

















/*
app.server.listen(app.get('port'),'123.12.12.12',function(){
	console.log( 'Express started on '+ '172.9.9.9' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});*/
