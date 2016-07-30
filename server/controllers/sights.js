var mongo = require('mongodb');

var loadSights = function(db, options, callback) {
  var collection = db.collection('items');
  
  //$arrayElemAt is introduced in 3.2 / use workaround until mLab is on 3.2

  /*
  collection
    .aggregate([
      {$geoNear:{
        spherical:true,
        limit:20,
        maxDistance:2000,
        query:{pos:{$exists:true},'title.en':{$exists:true}},
        near:{
          type:"Point", 
          coordinates:[options.pos.lon, options.pos.lat]
         }, 
        distanceField:'distance'
      }
    },
    {$project:{
      _id:0, 
      distance:1, 
      name:'$title.en',
      alias:'$alias.en',
      address:'$address.en',
      published: '$isPublished.en',
      cityAlias: '$city.alias',
      thumb: 1,
      location: { 
        longitude: {$arrayElemAt: ['$pos.coordinates', 0]},
        latitude: {$arrayElemAt: ['$pos.coordinates', 1]}
      }
    }}])
    .toArray(function(err, docs) {
        callback(docs);
    });
}
*/

//Workaround for Mongo v3.0
  collection
    .aggregate([
      {$geoNear:{
        spherical:true,
        limit:20,
        maxDistance:2000,
        query:{pos:{$exists:true},'title.en':{$exists:true}},
        near:{
          type:"Point", 
          coordinates:[options.pos.lon, options.pos.lat]
         }, 
        distanceField:'distance'
      }
    },
    {$project:{
      _id:0, 
      distance:1, 
      name:'$title.en',
      alias:'$alias.en',
      address:'$address.en',
      published: '$isPublished.en',
      cityAlias: '$city.alias',
      thumb: 1,
      location: "$pos"
    }}])
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

var isNumber= function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = {
  load: function(req, res){
    var pos = {lat:req.query.lat, lon:req.query.lon};
    pos.lat = parseFloat(pos.lat);
    pos.lon = parseFloat(pos.lon);
    if (pos && isNumber(pos.lat) && isNumber(pos.lon)) {
      loadSights(mongo.DB, {pos: pos}, function(docs){
        res.status(200).send({"sights": docs});
      });
    } else {
      res.status(500).send('Invalid parameters for sights.');
    }
  }
};
