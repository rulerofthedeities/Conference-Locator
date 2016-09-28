System.register(['@angular/core', '../services/sight.service', '../models/location.model', '../services/map.service'], function(exports_1, context_1) {
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
    var core_1, sight_service_1, location_model_1, map_service_1;
    var Sights;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sight_service_1_1) {
                sight_service_1 = sight_service_1_1;
            },
            function (location_model_1_1) {
                location_model_1 = location_model_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }],
        execute: function() {
            Sights = (function () {
                function Sights(sightService, mapService) {
                    this.sightService = sightService;
                    this.mapService = mapService;
                    this.loading = false;
                    this.hasSights = true;
                    this.markers = [];
                }
                Sights.prototype.ngOnInit = function () {
                    this.getSights();
                };
                Sights.prototype.getSights = function () {
                    var _this = this;
                    this.loading = true;
                    this.sightService.getNearbySights(this.hotelLocation).then(function (sights) {
                        _this.sights = sights;
                        _this.sights.forEach(function (sight) {
                            sight.url = sight.published ? sight.url = 'http://www.aviewoncities.com/' + sight.cityAlias + '/' + sight.alias + '.htm' : null;
                        });
                        _this.loading = false;
                        _this.hasSights = sights.length > 0;
                        _this.createMarkers(sights);
                    });
                };
                Sights.prototype.createMarkers = function (sights) {
                    var _this = this;
                    sights.forEach(function (sight) {
                        _this.markers.push({
                            lat: sight.location.latitude,
                            lon: sight.location.longitude,
                            infotxt: sight.name,
                            url: sight.url,
                            icon: '../assets/img/icon-pin-green.png' });
                    });
                    this.mapService.setSightMarkers(this.markers);
                };
                Sights.prototype.onMouseEnter = function (index) {
                    this.mapService.selectSightMarker(index);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', location_model_1.Location)
                ], Sights.prototype, "hotelLocation", void 0);
                Sights = __decorate([
                    core_1.Component({
                        selector: 'sights',
                        template: "\n    <div *ngIf=\"!hasSights\">Sorry, no sights found nearby</div>\n    <loading-indicator \n      [isLoading]=\"loading\"\n      message=\"Loading sights\">\n    </loading-indicator>\n    <ul class=\"list-unstyled\">\n      <sight-row\n        *ngFor=\"let sight of sights;let num=index\"\n        [sight]=\"sight\"\n        [no]=\"num+1\"\n        on-mouseenter=\"onMouseEnter(num)\">\n      </sight-row>\n    </ul>"
                    }), 
                    __metadata('design:paramtypes', [sight_service_1.SightService, map_service_1.MapService])
                ], Sights);
                return Sights;
            }());
            exports_1("Sights", Sights);
        }
    }
});
//# sourceMappingURL=sights.component.js.map