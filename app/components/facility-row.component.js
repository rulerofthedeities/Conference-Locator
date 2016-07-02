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
var FacilityRow = (function () {
    function FacilityRow() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', conference_model_1.Conference)
    ], FacilityRow.prototype, "facility", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FacilityRow.prototype, "isSelected", void 0);
    FacilityRow = __decorate([
        core_1.Component({
            selector: 'facility-row',
            directives: [hotels_component_1.Hotels],
            template: "\n    <li>\n      <div>{{facility.name}} {{facility.location.getLongLat()}}</div>\n      <hotels \n        *ngIf=\"isSelected\"\n        [facilityLocation]=\"facility.location\"\n        >\n      </hotels>\n    </li>\n  ",
            styles: ["\n\t\tli{\n\t\t\tcursor:pointer;\n\t\t}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FacilityRow);
    return FacilityRow;
}());
exports.FacilityRow = FacilityRow;
//# sourceMappingURL=facility-row.component.js.map