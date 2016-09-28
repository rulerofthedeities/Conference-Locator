System.register(['@angular/core', '../models/city.model'], function(exports_1, context_1) {
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
    var core_1, city_model_1;
    var Facilities;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_model_1_1) {
                city_model_1 = city_model_1_1;
            }],
        execute: function() {
            Facilities = (function () {
                function Facilities() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Facilities.prototype, "facilities", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Facilities.prototype, "markers", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', city_model_1.City)
                ], Facilities.prototype, "city", void 0);
                Facilities = __decorate([
                    core_1.Component({
                        selector: 'conference-list',
                        template: "\n  <div class=\"col-md-6\">\n    <ul class=\"list-unstyled ccs\">\n      <facility-row \n        [facility]=\"facility\" \n        *ngFor=\"let facility of facilities; let i = index\"\n        [i] = \"i\">\n      </facility-row>\n    </ul>\n  </div>\n  <div class=\"col-md-6\">\n    <map\n      [location]=\"city.location\"\n      [markers]=\"markers\">\n    </map>\n  </div>\n   ",
                        styles: ["\n    .ccs {height:600px;overflow-y:scroll;}\n    map {\n      border: 1px solid #666;\n      display: block;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Facilities);
                return Facilities;
            }());
            exports_1("Facilities", Facilities);
        }
    }
});
//# sourceMappingURL=facilities.component.js.map