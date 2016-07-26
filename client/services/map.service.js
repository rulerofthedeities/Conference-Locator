System.register(['@angular/core', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, Subject_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            MapService = (function () {
                function MapService() {
                    this.ccMarkerSelected = new Subject_1.Subject();
                    this.sightMarkerSelected = new Subject_1.Subject();
                    this.hotelMarkerSelected = new Subject_1.Subject();
                    this.hotelMarkers = new Subject_1.Subject();
                    this.sightMarkers = new Subject_1.Subject();
                    this.ccMarkerSelected$ = this.ccMarkerSelected.asObservable();
                    this.sightMarkerSelected$ = this.sightMarkerSelected.asObservable();
                    this.hotelMarkerSelected$ = this.hotelMarkerSelected.asObservable();
                    this.hotelMarkers$ = this.hotelMarkers.asObservable();
                    this.sightMarkers$ = this.sightMarkers.asObservable();
                }
                MapService.prototype.setHotelMarkers = function (markers) {
                    this.hotelMarkers.next(markers);
                };
                MapService.prototype.setSightMarkers = function (markers) {
                    this.sightMarkers.next(markers);
                };
                MapService.prototype.selectCcMarker = function (index) {
                    this.ccMarkerSelected.next(index);
                };
                MapService.prototype.selectSightMarker = function (index) {
                    this.sightMarkerSelected.next(index);
                };
                MapService.prototype.selectHotelMarker = function (index) {
                    this.hotelMarkerSelected.next(index);
                };
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    }
});
//# sourceMappingURL=map.service.js.map