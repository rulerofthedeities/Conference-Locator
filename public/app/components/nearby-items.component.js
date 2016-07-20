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
var hotels_component_1 = require('./hotels.component');
var sights_component_1 = require('./sights.component');
var tabs_component_1 = require('./common/tabs.component');
var tab_component_1 = require('./common/tab.component');
var NearbyItems = (function () {
    function NearbyItems() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', location_model_1.Location)
    ], NearbyItems.prototype, "location", void 0);
    NearbyItems = __decorate([
        core_1.Component({
            selector: 'nearby-items',
            directives: [hotels_component_1.Hotels, sights_component_1.Sights, tabs_component_1.Tabs, tab_component_1.Tab],
            template: "\n    <tabs>\n      <tab tabTitle=\"Hotels nearby\">\n        <hotels \n          [facilityLocation]=\"location\">\n        </hotels>\n      </tab>\n      <tab tabTitle=\"Sights nearby\">\n        <sights \n          [hotelLocation]=\"location\">\n        </sights>\n      </tab>\n    </tabs>"
        }), 
        __metadata('design:paramtypes', [])
    ], NearbyItems);
    return NearbyItems;
}());
exports.NearbyItems = NearbyItems;
//# sourceMappingURL=nearby-items.component.js.map