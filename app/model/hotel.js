"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var site_1 = require('./site');
var Hotel = (function (_super) {
    __extends(Hotel, _super);
    function Hotel(name, longitude, latitude) {
        _super.call(this, name, longitude, latitude);
    }
    return Hotel;
}(site_1.Site));
exports.Hotel = Hotel;
//# sourceMappingURL=hotel.js.map