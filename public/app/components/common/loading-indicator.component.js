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
var DEFAULTMESSAGE = 'Loading...';
var LoadingIndicator = (function () {
    function LoadingIndicator() {
        this.message = this.message || DEFAULTMESSAGE;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoadingIndicator.prototype, "isLoading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoadingIndicator.prototype, "message", void 0);
    LoadingIndicator = __decorate([
        core_1.Component({
            selector: 'loading-indicator',
            template: '<div *ngIf="isLoading">{{message}}</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingIndicator);
    return LoadingIndicator;
}());
exports.LoadingIndicator = LoadingIndicator;
//# sourceMappingURL=loading-indicator.component.js.map