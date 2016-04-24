var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var mongoose = require('mongoose');

var app = express();


function compile(str, path) {
  return stylus(str).set('filename', path);
}
// view engine setup

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');
app.use(stylus.middleware(
    {
      src: __dirname+'/public',
      compile: compile
    }
));

app.use(express.static(__dirname+'/public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//---------- COnnect to MongoDB
app.get('/vendor/:partialsPath', function(req, res) {
  console.log(req.params.partialsPath);
  res.render('vendor/'+req.params.partialsPath);
});

mongoose.connect('mongodb://localhost/vendor');
var con = mongoose.connection;
con.on('error', console.error.bind(console,'Does not connected to mongdb'));
con.once('open', function callback() {
  console.log('Vendor databsae is opened');
});

//------- routing
require('./routes/vendor')(app);
require('./routes/index')(app);
require('./routes/users')(app);

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stack trace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('layout/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stack traces leaked to user

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('layout/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
