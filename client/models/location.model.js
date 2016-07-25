System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Location;
    return {
        setters:[],
        execute: function() {
            Location = (function () {
                function Location() {
                }
                Location.prototype.getLongLat = function () {
                    return this.longitude + ', ' + this.latitude;
                };
                return Location;
            }());
            exports_1("Location", Location);
        }
    }
});
//# sourceMappingURL=location.model.js.map