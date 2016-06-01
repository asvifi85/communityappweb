var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var gcm = require('node-gcm');

var gcmApiKey = 'XXXXXXXXXXXXX'; // GCM API KEY OF YOUR GOOGLE CONSOLE PROJECT
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


app.get('/push', function (req, res) {
    var device_tokens = []; //create array for storing device tokens
    
    var retry_times = 4; //the number of times to retry sending the message if it fails
    var sender = new gcm.Sender(gcmApiKey); //create a new sender
    var message = new gcm.Message(); //create a new message
    message.addData('title', 'PushTitle');
    message.addData('message', "Push message");
    message.addData('sound', 'default');
    message.collapseKey = 'Testing Push'; //grouping messages
    message.delayWhileIdle = true; //delay sending while receiving device is offline
    message.timeToLive = 3; //number of seconds to keep the message on 
    //server if the device is offline
    
    //Take the registration id(lengthy string) that you logged 
    //in your ionic v2 app and update device_tokens[0] with it for testing.
    //Later save device tokens to db and 
    //get back all tokens and push to multiple devices
	//AIzaSyAiYhtcFmFaikPmo9l9wMWXmjxCkHhngkA
    device_tokens[0] = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    sender.send(message, device_tokens[0], retry_times, function (result) {
        console.log('push sent to: ' + device_tokens);
        res.status(200).send('Pushed notification ' + device_tokens);
    }, function (err) {
        res.status(500).send('failed to push notification ');
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
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
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
