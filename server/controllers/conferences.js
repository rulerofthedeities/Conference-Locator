var mongo = require('mongodb');

var loadConferences = function(db, options, callback) {
  var collection = db.collection('cc');

  //$arrayElemAt is introduced in 3.2 / use workaround until mLab is on 3.2

  /*
  collection
  .aggregate([
    {$match: {cityAlias: options.cityAlias}},
    {$project: 
      {
        _id:0, 
        name:1, 
        cityAlias:1, 
        location: { 
          longitude: {$arrayElemAt: ['$pos.coordinates', 0]},
          latitude: {$arrayElemAt: ['$pos.coordinates', 1]}
        }
      }
    }])
    .sort({'name': 1})
    .toArray(function(err, docs) {
        callback(docs);
    });
}*/

//Workaround for Mongo v3.0
collection
  .aggregate([
    {$match: {cityAlias: options.cityAlias}},
    {$project: 
      {
        _id:0, 
        name:1, 
        cityAlias:1, 
        location: "$pos"
      }
    }])
    .sort({'name': 1})
    .toArray(function(err, docs) {
      //Workaround for Mongo v3.0 on MLab
      var loc;
      docs.forEach(function(doc){
        loc = doc.location.coordinates;
        doc.location = {longitude:loc[0], latitude:loc[1]};
      });
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
