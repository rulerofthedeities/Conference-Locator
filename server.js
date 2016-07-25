'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./server/routes'),
    db = require('./server/db');

//config
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

if (app.get('env') == 'development') {
  // All code depending on the environment here
  // You can put morgan here for example
}

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/client', express.static(path.join(__dirname, '/client')));
//routing
routes.initialize(app, new express.Router());

db.connect(function(){
  app.listen(app.get('port'), function() { 
    console.log('Server up: http://localhost:' + app.get('port'));
  });
});
