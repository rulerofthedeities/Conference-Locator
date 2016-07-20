"use strict";
var location_model_1 = require('../models/location.model');
var locParis = new location_model_1.Location();
locParis.longitude = 2.3366968536376953;
locParis.latitude = 48.85786103480091;
var locPrague = new location_model_1.Location();
locPrague.longitude = 14.416843124389648;
locPrague.latitude = 50.083471541270624;
exports.CITIES = [
    { name: 'Prague', alias: 'prague', location: locPrague },
    { name: 'Paris', alias: 'paris', location: locParis }
];
//# sourceMappingURL=cities.js.map