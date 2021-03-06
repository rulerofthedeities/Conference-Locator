var mongo = require('mongodb');

var loadHotels = function(db, options, callback) {
  var collection = db.collection('hotels');

  collection
    .aggregate([
      {$geoNear: {
        spherical: true,
        limit: 20,
        maxDistance: 2000,
        query: {stars: {$in: ['', '3', '4','5']}},
        near: {
          type: "Point", 
          coordinates: [options.pos.lon, options.pos.lat]
         }, 
        distanceField: 'distance'
        }
      },
      {$project: {
        _id: 0, 
        distance: 1, 
        name: 1,
        address: 1,
        thumb: 1,
        stars: 1,
        hotelId: 1,
        location: { 
          longitude: {$arrayElemAt: ['$pos.coordinates', 0]},
          latitude: {$arrayElemAt: ['$pos.coordinates', 1]}
        }}
      }])
    .toArray(function(err, docs) {
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
      loadHotels(mongo.DB, {pos: pos}, function(docs){
        res.status(200).send({"hotels": docs});
      });
    } else {
      res.status(500).send('Invalid parameters for hotels.');
    }
  }
};
