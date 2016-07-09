"use strict";
var Location = (function () {
    function Location() {
    }
    Location.prototype.getLongLat = function () {
        return this.longitude + ', ' + this.latitude;
    };
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=location.model.js.map