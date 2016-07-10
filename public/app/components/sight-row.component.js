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
var item_component_1 = require('./common/item.component');
var sight_model_1 = require('../models/sight.model');
var SightRow = (function () {
    function SightRow() {
    }
    SightRow.prototype.ngOnInit = function () {
        this.imgsrc = 'http://www.aviewoncities.com/img/' + this.sight.cityAlias + '/' + this.sight.thumb + '.jpg';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sight_model_1.Sight)
    ], SightRow.prototype, "sight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SightRow.prototype, "no", void 0);
    SightRow = __decorate([
        core_1.Component({
            selector: 'sight-row',
            directives: [item_component_1.Item],
            template: "\n    <li>\n      <item\n        [no]=\"no\"\n        [img]=\"imgsrc\"\n        [name]=\"sight.name\"\n        [distance]=\"sight.distance\">\n      </item>\n    </li>"
        }), 
        __metadata('design:paramtypes', [])
    ], SightRow);
    return SightRow;
}());
exports.SightRow = SightRow;
//# sourceMappingURL=sight-row.component.js.map