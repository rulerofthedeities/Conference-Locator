"use strict";
var location_1 = require('./location');
var Site = (function () {
    function Site(name, longitude, latitude) {
        this.name = name;
        this.location = new location_1.Location(longitude, latitude);
    }
    return Site;
}());
exports.Site = Site;
//# sourceMappingURL=site.js.map