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
var location_model_1 = require('../models/location.model');
var hotel_service_1 = require('../services/hotel.service');
var map_service_1 = require('../services/map.service');
var hotel_row_component_1 = require('./hotel-row.component');
var loading_indicator_component_1 = require('./common/loading-indicator.component');
var Hotels = (function () {
    function Hotels(hotelService, mapService) {
        this.hotelService = hotelService;
        this.mapService = mapService;
        this.loading = false;
        this.hasHotels = true;
        this.markers = [];
    }
    Hotels.prototype.ngOnInit = function () {
        this.getHotels();
    };
    Hotels.prototype.getHotels = function () {
        var _this = this;
        this.loading = true;
        this.hotelService.getNearbyHotels(this.facilityLocation).then(function (hotels) {
            _this.hotels = hotels;
            _this.loading = false;
            _this.hasHotels = hotels.length > 0;
            _this.createMarkers(hotels);
        });
    };
    Hotels.prototype.isSelected = function (hotel) {
        return (this.selectedHotel === hotel);
    };
    Hotels.prototype.createMarkers = function (hotels) {
        var _this = this;
        hotels.forEach(function (hotel) {
            _this.markers.push({
                lat: hotel.location.latitude,
                lon: hotel.location.longitude,
                infotxt: hotel.name,
                icon: '../assets/img/icon-pin-blue.png',
                draggable: false });
        });
        this.mapService.setHotelMarkers(this.markers);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', location_model_1.Location)
    ], Hotels.prototype, "facilityLocation", void 0);
    Hotels = __decorate([
        core_1.Component({
            selector: 'hotels',
            providers: [hotel_service_1.HotelService],
            directives: [hotel_row_component_1.HotelRow, loading_indicator_component_1.LoadingIndicator],
            template: "\n    <div>\n      <div *ngIf=\"!hasHotels\">Sorry, no hotels found nearby</div>\n      <loading-indicator \n        [isLoading]=\"loading\"\n        message=\"Loading hotels...\">\n      </loading-indicator>\n      <ul class=\"list-unstyled\">\n        <hotel-row \n          *ngFor=\"let hotel of hotels;let num=index\"\n          [hotel]=\"hotel\"\n          [no]=\"num+1\">\n        </hotel-row>\n      </ul>\n    </div>"
        }), 
        __metadata('design:paramtypes', [hotel_service_1.HotelService, map_service_1.MapService])
    ], Hotels);
    return Hotels;
}());
exports.Hotels = Hotels;
//# sourceMappingURL=hotels.component.js.map