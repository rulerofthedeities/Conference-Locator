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
var CityFilter = (function () {
    function CityFilter() {
        this.selectedCity = new core_1.EventEmitter();
    }
    CityFilter.prototype.onChange = function (cityAlias) {
        this.selectedCity.emit(cityAlias);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CityFilter.prototype, "cities", void 0);
    __decorate([
        core_1.Input('defaultCity'), 
        __metadata('design:type', String)
    ], CityFilter.prototype, "currentCity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CityFilter.prototype, "selectedCity", void 0);
    CityFilter = __decorate([
        core_1.Component({
            'selector': 'city-filter',
            'template': "<div>City Selector</div>\n\t\t\t\t      <select\n                  [(ngModel)]=\"currentCity\"\n                  (ngModelChange)=\"onChange($event)\">\n                  <option *ngFor=\"let city of cities\" [value]=\"city.alias\">{{city.name}}</option>\n              </select>\n              {{defaultCity}}\n\t\t\t\t      "
        }), 
        __metadata('design:paramtypes', [])
    ], CityFilter);
    return CityFilter;
}());
exports.CityFilter = CityFilter;
//# sourceMappingURL=city-filter.component.js.map