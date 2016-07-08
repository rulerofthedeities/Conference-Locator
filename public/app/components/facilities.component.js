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
var facility_row_component_1 = require('./facility-row.component');
var Facilities = (function () {
    function Facilities() {
    }
    Facilities.prototype.onSelect = function (facility) {
        this.selectedFacility = facility;
    };
    Facilities.prototype.isSelected = function (facility) {
        return facility === this.selectedFacility;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Facilities.prototype, "facilities", void 0);
    Facilities = __decorate([
        core_1.Component({
            selector: 'conference-list',
            directives: [facility_row_component_1.FacilityRow],
            template: "\n  <ul>\n    <facility-row \n      [facility]=\"facility\" \n      *ngFor=\"let facility of facilities\">\n    </facility-row>\n  </ul>\n  <div *ngIf=\"selectedFacility\">\n  \t{{selectedFacility.name}}\n  </div>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], Facilities);
    return Facilities;
}());
exports.Facilities = Facilities;
//# sourceMappingURL=facilities.component.js.map