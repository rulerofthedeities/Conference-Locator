var mongo = require('mongodb'),
    assert = require("assert");

var loadConferences = function(db, options, callback) {
  var collection = db.collection('cc');

  collection
    .find({cityAlias:options.cityAlias},{
      '_id': false,
      'name': true,
      'pos': true
    })
    .sort({'name': 1})
    .toArray(function(err, docs) {
        assert.equal(null, err);
        callback(docs);
    });
}


module.exports = {
  load: function(req, res){
    var cityAlias = req.params.city;
    if (cityAlias) {
      loadConferences(mongo.DB, {cityAlias: cityAlias}, function(docs){
        res.status(200).send({"conferences": docs});
      });
    }
  }
};
