'use strict';

var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    app = express(),
    routes = require('./server/routes'),
    db = require('./server/db');
    
//config
app.set('port', process.env.PORT || 3001);
app.set('env', process.env.NODE_ENV || 'development');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static((path.join(__dirname, 'dist'))));

//routing
routes.initialize(app, new express.Router());
app.use(function (req, res, next) {
    var home = path.resolve(__dirname + '/dist/index.html');
    res.sendFile(home);
});


db.connect(function(){
  app.listen(app.get('port'), function() { 
    console.log('Server up: http://localhost:' + app.get('port'));
  });
});
