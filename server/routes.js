var conferences = require('../server/controllers/conferences'),
    hotels = require('../server/controllers/hotels'),
    sights = require('../server/controllers/sights'),
    env = require('../server/controllers/env'),
    path = require("path");

module.exports.initialize = function(app, router) {
  var home = path.resolve(__dirname + '/../index.html');

  router.get('/', function(request, response){
    response.sendFile(home);
  });

  router.get('/conferences/:city', conferences.load);
  router.get('/hotels', hotels.load);
  router.get('/sights', sights.load);

  app.use(router);
};
