var conferences = require('../server/conferences'),
    path = require("path");

module.exports.initialize = function(app, router) {
  var home = path.resolve(__dirname + '/../index.html');

  router.get('/', function(request, response){
    response.sendFile(home);
  });

  router.get('/conferences/:city', conferences.load);

  app.use(router);
};
