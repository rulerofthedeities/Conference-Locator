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
var core_2 = require('angular2-google-maps/core');
var MapsTest = (function () {
    function MapsTest() {
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapsTest = __decorate([
        core_1.Component({
            selector: 'maps-test',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            template: "\n  <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\n  </sebm-google-map>",
            styles: ["\n    .sebm-google-map-container {\n      height: 300px;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], MapsTest);
    return MapsTest;
}());
exports.MapsTest = MapsTest;
//# sourceMappingURL=maptest.component.js.map