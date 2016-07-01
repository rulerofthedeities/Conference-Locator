"use strict";
var location_model_1 = require('./location.model');
var Site = (function () {
    function Site(name, longitude, latitude) {
        this.name = name;
        this.location = new location_model_1.Location(longitude, latitude);
    }
    return Site;
}());
exports.Site = Site;
//# sourceMappingURL=site.model.js.map