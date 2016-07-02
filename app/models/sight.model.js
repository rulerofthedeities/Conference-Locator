"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var site_model_1 = require('./site.model');
var Sight = (function (_super) {
    __extends(Sight, _super);
    function Sight(longitude, latitude) {
        _super.call(this, longitude, latitude);
    }
    return Sight;
}(site_model_1.Site));
exports.Sight = Sight;
//# sourceMappingURL=sight.model.js.map