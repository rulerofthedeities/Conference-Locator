"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var site_1 = require('./site');
var Sight = (function (_super) {
    __extends(Sight, _super);
    function Sight(name, longitude, latitude) {
        _super.call(this, name, longitude, latitude);
    }
    return Sight;
}(site_1.Site));
exports.Sight = Sight;
//# sourceMappingURL=sight.js.map