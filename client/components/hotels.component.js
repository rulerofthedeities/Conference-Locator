System.register(['@angular/core', '../models/location.model', '../services/hotel.service', '../services/map.service'], function(exports_1, context_1) {
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
    var core_1, location_model_1, hotel_service_1, map_service_1;
    var Hotels;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (location_model_1_1) {
                location_model_1 = location_model_1_1;
            },
            function (hotel_service_1_1) {
                hotel_service_1 = hotel_service_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }],
        execute: function() {
            Hotels = (function () {
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
                        _this.hotels.forEach(function (hotel) {
                            hotel.url = hotel.hotelId ? 'http://travel.aviewoncities.com/templates/430701/hotels/' + hotel.hotelId + '/overview' : null;
                        });
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
                            url: hotel.url,
                            icon: '../assets/img/icon-pin-blue.png' });
                    });
                    this.mapService.setHotelMarkers(this.markers);
                };
                Hotels.prototype.onMouseEnter = function (index) {
                    this.mapService.selectHotelMarker(index);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', location_model_1.Location)
                ], Hotels.prototype, "facilityLocation", void 0);
                Hotels = __decorate([
                    core_1.Component({
                        selector: 'hotels',
                        template: "\n    <div>\n      <div *ngIf=\"!hasHotels\">Sorry, no hotels found nearby</div>\n      <loading-indicator \n        [isLoading]=\"loading\"\n        message=\"Loading hotels\">\n      </loading-indicator>\n      <ul class=\"list-unstyled\">\n        <hotel-row \n          *ngFor=\"let hotel of hotels;let num=index\"\n          [hotel]=\"hotel\"\n          [no]=\"num+1\"\n          on-mouseenter=\"onMouseEnter(num)\">\n        </hotel-row>\n      </ul>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [hotel_service_1.HotelService, map_service_1.MapService])
                ], Hotels);
                return Hotels;
            }());
            exports_1("Hotels", Hotels);
        }
    }
});
//# sourceMappingURL=hotels.component.js.map