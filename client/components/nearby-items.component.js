System.register(['@angular/core', '../models/location.model', './hotels.component', './sights.component', './common/tabs.component', './common/tab.component'], function(exports_1, context_1) {
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
    var core_1, location_model_1, hotels_component_1, sights_component_1, tabs_component_1, tab_component_1;
    var NearbyItems;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (location_model_1_1) {
                location_model_1 = location_model_1_1;
            },
            function (hotels_component_1_1) {
                hotels_component_1 = hotels_component_1_1;
            },
            function (sights_component_1_1) {
                sights_component_1 = sights_component_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            NearbyItems = (function () {
                function NearbyItems() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', location_model_1.Location)
                ], NearbyItems.prototype, "location", void 0);
                NearbyItems = __decorate([
                    core_1.Component({
                        selector: 'nearby-items',
                        directives: [hotels_component_1.Hotels, sights_component_1.Sights, tabs_component_1.Tabs, tab_component_1.Tab],
                        template: "\n    <tabs>\n      <tab tabTitle=\"Hotels nearby\" alias=\"hotels\">\n        <hotels \n          [facilityLocation]=\"location\">\n        </hotels>\n      </tab>\n      <tab tabTitle=\"Sights nearby\" alias=\"sights\">\n        <sights \n          [hotelLocation]=\"location\">\n        </sights>\n      </tab>\n    </tabs>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NearbyItems);
                return NearbyItems;
            }());
            exports_1("NearbyItems", NearbyItems);
        }
    }
});
//# sourceMappingURL=nearby-items.component.js.map