System.register(['@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var DEFAULTMESSAGE, LoadingIndicator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            DEFAULTMESSAGE = 'Loading';
            LoadingIndicator = (function () {
                function LoadingIndicator() {
                    this.dots = ['', '.', '..', '...'];
                }
                LoadingIndicator.prototype.ngOnInit = function () {
                    this.message = this.userMessage || DEFAULTMESSAGE;
                    this.doDots();
                };
                LoadingIndicator.prototype.doDots = function () {
                    var _this = this;
                    this.message$ = Rx_1.Observable.interval(500)
                        .map(function (i) { return _this.message + _this.dots[i % _this.dots.length]; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LoadingIndicator.prototype, "isLoading", void 0);
                __decorate([
                    core_1.Input('message'), 
                    __metadata('design:type', String)
                ], LoadingIndicator.prototype, "userMessage", void 0);
                LoadingIndicator = __decorate([
                    core_1.Component({
                        selector: 'loading-indicator',
                        template: '<div *ngIf="isLoading">{{message$ | async}}</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoadingIndicator);
                return LoadingIndicator;
            }());
            exports_1("LoadingIndicator", LoadingIndicator);
        }
    }
});
//# sourceMappingURL=loading-indicator.component.js.map