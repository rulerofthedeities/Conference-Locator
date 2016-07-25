System.register(['@angular/core', 'angular2-google-maps/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var MapMarkers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            MapMarkers = (function () {
                function MapMarkers() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapMarkers.prototype, "markers", void 0);
                MapMarkers = __decorate([
                    core_1.Component({
                        selector: 'map-markers',
                        directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
                        template: "\n    <sebm-google-map-marker\n      *ngFor=\"let m of markers; let i = index\"\n      [longitude]=\"m.lon\"\n      [latitude]=\"m.lat\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"false\"\n      [iconUrl]=\"m.icon\">\n      <sebm-google-map-info-window>\n        <p>{{i+1}}. \n          <span *ngIf=\"m.url\"><a href=\"{{m.url}}\" target=\"_blank\">{{m.infotxt}}</a></span>\n          <span *ngIf=\"!m.url\">{{m.infotxt}}</span>\n        </p>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapMarkers);
                return MapMarkers;
            }());
            exports_1("MapMarkers", MapMarkers);
        }
    }
});
//# sourceMappingURL=map-markers.component.js.map