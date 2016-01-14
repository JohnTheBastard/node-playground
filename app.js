var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var assert = require('assert');
//var monk = require('monk');
//var db = monk('localhost:27017/node-playground');
var url = 'mongodb://localhost:27017/node-playground';


var routes = require('./routes/index');
var users = require('./routes/users');

function createApp() {
	
	var app = express();
	var publicPath = path.join( __dirname, 'www/public' );
	
	// view engine setup
	app.set( 'views', path.join( __dirname, 'views' ) );
	//app.set( 'view engine', 'hbs' );
	app.set( 'view engine', 'jade' );
	
	app.use( favicon( path.join( publicPath, 'favicon.ico' ) ) );
	app.use( morgan('dev') );
	
	// parse application/x-www-form-urlencoded
	app.use( bodyParser.urlencoded( { extended: false } ) );
	// parse application/json
	app.use( bodyParser.json() );
	app.use( cookieParser() );
	app.use( express.static( publicPath ) );
	
	// Make our db accessible to our router
	MongoClient.connect(url, (err, db) => {
		assert.equal(null, err);
		console.log("Connected correctly to server.");
		db.close();
	});
	app.use(function(req,res,next){
		req.db = db;
		next();
	});
	
	app.use('/', routes);
	app.use('/users', users);
	
	// catch 404 and forward to error handler
	app.use( (req, res, next) => {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});
	
	// error handlers
	
	// development error handler
	// will print stacktrace
	if ( app.get('env') === 'development' ) {
	  app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: err
	    });
	  });
	}
	
	// production error handler
	// no stacktraces leaked to user
	app.use( (err, req, res, next) => {
	  res.status(err.status || 500);
	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});

	return app;
}

var app_module = createApp();
module.exports = app_module;