var conferences = require('../server/controllers/conferences'),
    hotels = require('../server/controllers/hotels'),
    sights = require('../server/controllers/sights'),
    path = require("path");

module.exports.initialize = function(app, router) {

  router.get('/conferences/:city', conferences.load);
  router.get('/hotels', hotels.load);
  router.get('/sights', sights.load);

  app.use('/api/', router);

};
