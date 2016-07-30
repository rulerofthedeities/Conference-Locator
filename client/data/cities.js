System.register(['../models/location.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var location_model_1;
    var locParis, locPrague, locLondon, CITIES;
    return {
        setters:[
            function (location_model_1_1) {
                location_model_1 = location_model_1_1;
            }],
        execute: function() {
            locParis = new location_model_1.Location();
            locParis.longitude = 2.3366968536376953;
            locParis.latitude = 48.85786103480091;
            locPrague = new location_model_1.Location();
            locPrague.longitude = 14.416843124389648;
            locPrague.latitude = 50.083471541270624;
            locLondon = new location_model_1.Location();
            locLondon.longitude = -0.1253890380859375;
            locLondon.latitude = 51.511092905004745;
            exports_1("CITIES", CITIES = [
                { name: 'London', alias: 'london', location: locLondon },
                { name: 'Paris', alias: 'paris', location: locParis },
                { name: 'Prague', alias: 'prague', location: locPrague }
            ]);
        }
    }
});
//# sourceMappingURL=cities.js.map