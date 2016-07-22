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
var tabs_service_1 = require('../services/tabs.service');
var Map = (function () {
    function Map(mapService, tabService) {
        this.mapService = mapService;
        this.tabService = tabService;
        this.showWindow = false;
        this.showPinType = 'hotels';
        this.zoom = 11;
        this.subscriptions = {};
    }
    Map.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions['hotels'] = this.mapService.hotelMarkers$.subscribe(function (hotels) { _this.hotelMarkers = hotels; });
        this.subscriptions['sights'] = this.mapService.sightMarkers$.subscribe(function (sights) {
            console.log('getting new sights', sights);
            _this.sightMarkers = sights;
        });
        this.subscriptions['ccmarker'] = this.mapService.ccMarkerSelected$.subscribe(function (index) { _this.selectMarker(index); });
        this.subscriptions['tabs'] = this.tabService.tabs$.subscribe(function (tab) { _this.showPinType = tab; });
    };
    Map.prototype.clickedMarker = function (marker, index) {
        this.selectMarker(index);
        this.mapService.selectCcMarker(index);
    };
    Map.prototype.selectMarker = function (index) {
        this.centerMap(index);
        this.ccMarkers.forEach(function (marker) {
            if (marker.icon === '../assets/img/icon-star-red.png') {
                marker.icon = '../assets/img/icon-star-blue.png';
            }
        });
        this.ccMarkers[index].icon = '../assets/img/icon-star-red.png';
    };
    Map.prototype.centerMap = function (index) {
        var marker = this.ccMarkers[index];
        this.location.longitude = marker.lon;
        this.location.latitude = marker.lat;
    };
    Map.prototype.showPins = function (tab) {
        return tab === this.showPinType;
    };
    Map.prototype.ngOnDestroy = function () {
        for (var key in this.subscriptions) {
            this.subscriptions[key].unsubscribe();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', location_model_1.Location)
    ], Map.prototype, "location", void 0);
    __decorate([
        core_1.Input('markers'), 
        __metadata('design:type', Array)
    ], Map.prototype, "ccMarkers", void 0);
    Map = __decorate([
        core_1.Component({
            selector: 'map',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            template: "\n  <sebm-google-map \n    [longitude]=\"location.longitude\"\n    [latitude]=\"location.latitude\"\n    [zoom]=\"zoom\">\n\n    <div *ngIf=\"showPins('hotels')\">\n      <sebm-google-map-marker\n        *ngFor=\"let m of hotelMarkers; let i = index\"\n        [longitude]=\"m.lon\"\n        [latitude]=\"m.lat\"\n        [label]=\"m.label\"\n        [markerDraggable]=\"m.draggable\"\n        [iconUrl]=\"m.icon\">\n        <sebm-google-map-info-window>\n            <p>{{m.infotxt}}</p>\n        </sebm-google-map-info-window>\n      </sebm-google-map-marker>\n    </div>\n\n    <div *ngIf=\"showPins('sights')\">\n      <sebm-google-map-marker\n        *ngFor=\"let m of sightMarkers; let i = index\"\n        [longitude]=\"m.lon\"\n        [latitude]=\"m.lat\"\n        [label]=\"m.label\"\n        [markerDraggable]=\"m.draggable\"\n        [iconUrl]=\"m.icon\">\n        <sebm-google-map-info-window>\n            <p>{{m.infotxt}}</p>\n        </sebm-google-map-info-window>\n      </sebm-google-map-marker>\n    </div>\n\n    <sebm-google-map-marker \n      *ngFor=\"let m of ccMarkers; let i = index\"\n      (markerClick)=\"clickedMarker(m, i)\"\n      [longitude]=\"m.lon\"\n      [latitude]=\"m.lat\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"m.draggable\"\n      [iconUrl]=\"m.icon\">\n      <sebm-google-map-info-window *ngIf=\"showWindow\">\n          <p>{{m.infotxt}}</p>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n\n\n  </sebm-google-map>",
            styles: ["\n    .sebm-google-map-container {\n      height: 300px;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService, tabs_service_1.TabService])
    ], Map);
    return Map;
}());
exports.Map = Map;
//# sourceMappingURL=map.component.js.map