System.register(['./site.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var site_model_1;
    var Hotel;
    return {
        setters:[
            function (site_model_1_1) {
                site_model_1 = site_model_1_1;
            }],
        execute: function() {
            Hotel = (function (_super) {
                __extends(Hotel, _super);
                function Hotel() {
                    _super.apply(this, arguments);
                }
                return Hotel;
            }(site_model_1.Site));
            exports_1("Hotel", Hotel);
        }
    }
});
//# sourceMappingURL=hotel.model.js.map