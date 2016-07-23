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
var Item = (function () {
    function Item() {
    }
    Item.prototype.externalLink = function () {
        if (this.url) {
            window.open(this.url, '_blank');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Item.prototype, "no", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Item.prototype, "img", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Item.prototype, "url", void 0);
    Item = __decorate([
        core_1.Component({
            selector: 'item',
            template: "\n    <div class=\"media item\" [ngClass]=\"{'link':url}\" (click)=\"externalLink()\">\n      <div class=\"pull-left no\">\n        {{no}}.\n      </div>\n      <div class=\"media-left\">\n        <img src=\"{{img}}\" class=\"media-object\" alt=\"{{name}}\">\n      </div>\n      <div class=\"media-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n\t",
            styleUrls: ['app/components/common/item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Item);
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.component.js.map