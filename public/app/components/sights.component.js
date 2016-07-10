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
var sight_service_1 = require('../services/sight.service');
var location_model_1 = require('../models/location.model');
var sight_row_component_1 = require('./sight-row.component');
var loading_indicator_component_1 = require('./common/loading-indicator.component');
var Sights = (function () {
    function Sights(sightService) {
        this.sightService = sightService;
        this.loading = false;
        this.hasSights = true;
    }
    Sights.prototype.ngOnInit = function () {
        this.getSights();
    };
    Sights.prototype.getSights = function () {
        var _this = this;
        this.loading = true;
        this.sightService.getNearbySights(this.hotelLocation).then(function (sights) {
            _this.sights = sights;
            _this.loading = false;
            _this.hasSights = sights.length > 0;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', location_model_1.Location)
    ], Sights.prototype, "hotelLocation", void 0);
    Sights = __decorate([
        core_1.Component({
            'selector': 'sights',
            'providers': [sight_service_1.SightService],
            'directives': [sight_row_component_1.SightRow, loading_indicator_component_1.LoadingIndicator],
            'template': "\n    <div *ngIf=\"!hasSights\">Sorry, no sights found nearby</div>\n    <loading-indicator \n      [isLoading]=\"loading\"\n      message=\"Loading sights...\"\n    ></loading-indicator>\n    <ul class=\"list-unstyled\">\n      <sight-row\n        *ngFor=\"let sight of sights;let num=index\"\n        [sight]=\"sight\"\n        [no]=\"num+1\"\n      >\n      </sight-row>\n    </ul>"
        }), 
        __metadata('design:paramtypes', [sight_service_1.SightService])
    ], Sights);
    return Sights;
}());
exports.Sights = Sights;
//# sourceMappingURL=sights.component.js.map