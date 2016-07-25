System.register(['@angular/core', './tab.component', '../../services/tabs.service'], function(exports_1, context_1) {
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
    var core_1, tab_component_1, tabs_service_1;
    var Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            },
            function (tabs_service_1_1) {
                tabs_service_1 = tabs_service_1_1;
            }],
        execute: function() {
            Tabs = (function () {
                function Tabs(tabService) {
                    this.tabService = tabService;
                }
                Tabs.prototype.selectTab = function (tab) {
                    this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
                    tab.active = true;
                    this.tabService.setTab(tab.alias);
                };
                // contentChildren are set
                Tabs.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                __decorate([
                    core_1.ContentChildren(tab_component_1.Tab), 
                    __metadata('design:type', core_1.QueryList)
                ], Tabs.prototype, "tabs", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n  <ul class=\"nav nav-tabs\">\n    <li \n      *ngFor=\"let tab of tabs;let num=index\" \n      (click)=\"selectTab(tab)\" \n      [class.active]=\"tab.active\">\n      <a href=\"#\">{{tab.title}}</a>\n    </li>\n  </ul>\n  <ng-content></ng-content>\n  "
                    }), 
                    __metadata('design:paramtypes', [tabs_service_1.TabService])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map