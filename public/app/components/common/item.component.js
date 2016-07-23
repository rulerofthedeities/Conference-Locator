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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Item.prototype, "no", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Item.prototype, "img", void 0);
    Item = __decorate([
        core_1.Component({
            selector: 'item',
            template: "\n    <div class=\"media item\">\n      <div class=\"pull-left no\">{{no}}.</div>\n      <div class=\"media-left\">\n        <img src=\"{{img}}\" class=\"media-object\" alt=\"{{name}}\">\n      </div>\n      <div class=\"media-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n\t",
            styles: ["\n    img {\n      width: 60px;\n      height: 60px;\n      margin-left: 4px;\n    }\n    .item {\n      margin-bottom: 2px;\n      border: 1px solid white;\n    }\n    .media-body {\n      padding-top: 5px;\n    }\n    .no {\n      width: 20px;\n      padding: 5px;\n    }\n    .item:hover {\n      border: 1px dotted #c9515c;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n    .address {\n      color: #666;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], Item);
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.component.js.map