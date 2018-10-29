var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql= require('mysql');
var http = require('http');

var indexRouter = require('./routes/index');
var orderdetailsRouter = require('./routes/orderdetails');
var itemRouter = require('./routes/item');
var shopRouter = require('./routes/shop');
var queryRouter = require('./routes/query');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	connection = mysql.createConnection({
		host     : 'localhost',
		port 	 : '3307',
		user     : 'root',
		password : 'root',
		database : 'test'
	});
	connection.connect();
	next();
});

app.use('/', indexRouter);shopRouter
app.use('/orderdetails', orderdetailsRouter);
app.use('/shop', shopRouter);
app.use('/item', itemRouter);
app.use('/query', queryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
