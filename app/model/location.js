"use strict";
var Location = (function () {
    function Location(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    Location.prototype.getLongLat = function () {
        return this.longitude + ', ' + this.latitude;
    };
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=location.js.map