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
var location_model_1 = require('./models/location.model');
var hotel_service_1 = require('./services/hotel.service');
var hotel_row_component_1 = require('./hotel-row.component');
var Hotels = (function () {
    function Hotels(hotelService) {
        this.hotelService = hotelService;
    }
    Hotels.prototype.ngOnInit = function () {
        this.getHotels();
    };
    Hotels.prototype.getHotels = function () {
        var _this = this;
        this.hotelService.getNearbyHotels(this.facilityLocation).then(function (hotels) { return _this.hotels = hotels; });
    };
    Hotels.prototype.selectHotel = function (hotel) {
        this.selectedHotel = hotel;
    };
    Hotels.prototype.isSelected = function (hotel) {
        return (this.selectedHotel === hotel);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', location_model_1.Location)
    ], Hotels.prototype, "facilityLocation", void 0);
    Hotels = __decorate([
        core_1.Component({
            selector: 'hotels',
            providers: [hotel_service_1.HotelService],
            directives: [hotel_row_component_1.HotelRow],
            template: "<div>\n\t\t\t\thotels near location {{facilityLocation.longitude}},{{facilityLocation.latitude}}\n\t\t\t\t<ul>\n\t\t\t\t\t<hotel-row \n\t\t\t\t\t\t*ngFor=\"let hotel of hotels\"\n\t\t\t\t\t\t[hotel]=\"hotel\"\n\t\t\t\t\t\t[isSelected]=\"isSelected(hotel)\"\n\t\t\t\t\t\t(click)=\"selectHotel(hotel)\">\n\t\t\t\t\t</hotel-row>\n\t\t\t\t</ul>\n\t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [hotel_service_1.HotelService])
    ], Hotels);
    return Hotels;
}());
exports.Hotels = Hotels;
//# sourceMappingURL=hotels.component.js.map