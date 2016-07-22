"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var location_model_1 = require('../models/location.model');
var map_service_1 = require('../services/map.service');
var Map = (function () {
    function Map(mapService) {
        this.mapService = mapService;
        this.showWindow = false;
    }
    Map.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.hotelMarkers$.subscribe(function (hotels) {
            _this.hotelMarkers = hotels;
            console.log('hotels', hotels);
        });
        this.mapService.ccMarkerSelected$.subscribe(function (index) { _this.selectMarker(index); });
    };
    Map.prototype.clickedMarker = function (marker, index) {
        console.log('markeridx', index);
        this.selectMarker(index);
        this.mapService.selectCcMarker(index);
    };
    Map.prototype.selectMarker = function (index) {
        console.log('markeridx2', index);
        this.markers.forEach(function (marker) {
            if (marker.icon === '../assets/img/icon-star-red.png') {
                marker.icon = '../assets/img/icon-star-blue.png';
            }
        });
        console.log('Setting marker index icon', index);
        this.markers[index].icon = '../assets/img/icon-star-red.png';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', location_model_1.Location)
    ], Map.prototype, "location", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Map.prototype, "markers", void 0);
    Map = __decorate([
        core_1.Component({
            selector: 'map',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            template: "\n  <sebm-google-map \n    [longitude]=\"location.longitude\"\n    [latitude]=\"location.latitude\"\n    [zoom]=\"11\">\n\n    <sebm-google-map-marker \n      *ngFor=\"let m of markers; let i = index\"\n      (markerClick)=\"clickedMarker(m, i)\"\n      [longitude]=\"m.lon\"\n      [latitude]=\"m.lat\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"m.draggable\"\n      [iconUrl]=\"m.icon\">\n      <sebm-google-map-info-window *ngIf=\"showWindow\">\n          <p>{{m.infotxt}}</p>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n\n    <sebm-google-map-marker \n      *ngFor=\"let m of hotelMarkers; let i = index\"\n      (markerClick)=\"clickedMarker(m, i)\"\n      [longitude]=\"m.lon\"\n      [latitude]=\"m.lat\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"m.draggable\"\n      [iconUrl]=\"m.icon\">\n      <sebm-google-map-info-window *ngIf=\"showWindow\">\n          <p>{{m.infotxt}}</p>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n\n  </sebm-google-map>",
            styles: ["\n    .sebm-google-map-container {\n      height: 300px;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService])
    ], Map);
    return Map;
}());
exports.Map = Map;
//# sourceMappingURL=map.component.js.map