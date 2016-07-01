"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var site_model_1 = require('./site.model');
var Conference = (function (_super) {
    __extends(Conference, _super);
    function Conference(name, longitude, latitude) {
        _super.call(this, name, longitude, latitude);
    }
    return Conference;
}(site_model_1.Site));
exports.Conference = Conference;
//# sourceMappingURL=conference.model.js.map