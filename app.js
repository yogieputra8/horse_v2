var express = require('express');
var PORT = 7000;
var hbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon'); 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 
var routes = require('./routes/index');
var app = express();
var http = require("http");
var https = require("https");
var request = require('request');

 

// Express configuration
// app.use(logger('dev'));
// app.use(express.cookieParser('my secret here'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts/' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Routes
app.use('/', routes); 



app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT + '!');
});
