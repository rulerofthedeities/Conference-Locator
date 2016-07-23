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
var hotel_model_1 = require('../models/hotel.model');
var item_component_1 = require('./common/item.component');
var meters_pipe_1 = require('../pipes/meters.pipe');
var HotelRow = (function () {
    function HotelRow() {
        this.isSelected = false;
    }
    HotelRow.prototype.ngOnInit = function () {
        if (this.hasStars()) {
            this.arr = new Array(parseInt(this.hotel.stars, 10));
        }
    };
    HotelRow.prototype.selectHotel = function () {
        this.isSelected = !this.isSelected;
    };
    HotelRow.prototype.hasStars = function () {
        return this.hotel.stars !== '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hotel_model_1.Hotel)
    ], HotelRow.prototype, "hotel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HotelRow.prototype, "no", void 0);
    HotelRow = __decorate([
        core_1.Component({
            selector: 'hotel-row',
            directives: [item_component_1.Item],
            pipes: [meters_pipe_1.MeterPipe],
            template: "\n    <li>\n      <item (click)=\"selectHotel()\"\n        [no]=\"no\"\n        [img]=\"hotel.thumb\">\n        <strong class=\"media-heading\">\n          {{hotel.name}}\n        </strong> \n        <span *ngIf=\"hasStars()\"><i *ngFor=\"let s of arr\" class=\"fa fa-star\"></i></span>\n        <p>\n          <span class=\"address\">{{hotel.address}}</span>\n          <i>({{hotel.distance | meter:1}}m)</i>\n        </p>\n      </item>\n    </li>",
            styles: ["\n      .fa-star {color: red;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HotelRow);
    return HotelRow;
}());
exports.HotelRow = HotelRow;
//# sourceMappingURL=hotel-row.component.js.map