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
var conference_model_1 = require('../models/conference.model');
var hotels_component_1 = require('./hotels.component');
var sights_component_1 = require('./sights.component');
var tabs_component_1 = require('./common/tabs.component');
var tab_component_1 = require('./common/tab.component');
var FacilityRow = (function () {
    function FacilityRow() {
        this.isSelected = false;
    }
    FacilityRow.prototype.selectFacility = function () {
        this.isSelected = !this.isSelected;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', conference_model_1.Conference)
    ], FacilityRow.prototype, "facility", void 0);
    FacilityRow = __decorate([
        core_1.Component({
            selector: 'facility-row',
            directives: [hotels_component_1.Hotels, sights_component_1.Sights, tabs_component_1.Tabs, tab_component_1.Tab],
            template: "\n    <li [ngClass]=\"{active:isSelected}\">\n      <i class=\"fa pull-left\" [ngClass]=\"{'fa-chevron-right':!isSelected,'fa-chevron-down':isSelected}\"></i>\n      <h4 (click)=\"selectFacility()\">\n        {{facility.name}}\n      </h4>\n\n      <tabs *ngIf=\"isSelected\">\n        <tab tabTitle=\"Hotels nearby\">\n          <hotels \n            [facilityLocation]=\"facility.location\"\n            [class.selected]=\"isSelected\"\n            >\n          </hotels>\n        </tab>\n        <tab tabTitle=\"Sights nearby\">\n          <sights \n            [hotelLocation]=\"facility.location\"\n            [class.selected]=\"isSelected\"\n            >\n          </sights>\n        </tab>\n      </tabs>\n\n    </li>\n  ",
            styles: ["\n    li>h4 {cursor: pointer;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FacilityRow);
    return FacilityRow;
}());
exports.FacilityRow = FacilityRow;
//# sourceMappingURL=facility-row.component.js.map