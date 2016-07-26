System.register(['@angular/core', '../models/conference.model', './nearby-items.component', '../services/map.service'], function(exports_1, context_1) {
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
    var core_1, conference_model_1, nearby_items_component_1, map_service_1;
    var FacilityRow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (conference_model_1_1) {
                conference_model_1 = conference_model_1_1;
            },
            function (nearby_items_component_1_1) {
                nearby_items_component_1 = nearby_items_component_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }],
        execute: function() {
            FacilityRow = (function () {
                function FacilityRow(mapService) {
                    var _this = this;
                    this.mapService = mapService;
                    this.isSelected = false;
                    this.subscription = mapService.ccMarkerSelected$.subscribe(function (index) {
                        _this.markerSelected(index);
                    });
                }
                FacilityRow.prototype.markerSelected = function (index) {
                    this.isSelected = index === this.i;
                };
                FacilityRow.prototype.selectFacility = function () {
                    this.isSelected = !this.isSelected;
                    if (this.isSelected) {
                        this.mapService.selectCcMarker(this.i);
                    }
                    else {
                        this.mapService.setHotelMarkers(null);
                        this.mapService.setSightMarkers(null);
                        this.mapService.selectCcMarker(null);
                    }
                };
                FacilityRow.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', conference_model_1.Conference)
                ], FacilityRow.prototype, "facility", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FacilityRow.prototype, "i", void 0);
                FacilityRow = __decorate([
                    core_1.Component({
                        selector: 'facility-row',
                        directives: [nearby_items_component_1.NearbyItems],
                        template: "\n    <li [ngClass]=\"{active:isSelected}\">\n      <i \n        class=\"fa pull-left\" \n        [ngClass]=\"{'fa-chevron-right':!isSelected,'fa-chevron-down':isSelected}\">\n      </i>\n      \n      <h4 (click)=\"selectFacility()\">\n        {{facility.name}}\n      </h4>\n\n      <nearby-items *ngIf=\"isSelected\"\n        [location]=\"facility.location\">\n      </nearby-items>\n\n    </li>\n  ",
                        styles: ["\n    li>h4 {cursor: pointer;}\n  "]
                    }), 
                    __metadata('design:paramtypes', [map_service_1.MapService])
                ], FacilityRow);
                return FacilityRow;
            }());
            exports_1("FacilityRow", FacilityRow);
        }
    }
});
//# sourceMappingURL=facility-row.component.js.map