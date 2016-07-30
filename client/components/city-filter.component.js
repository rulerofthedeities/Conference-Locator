System.register(['@angular/core', '../services/city.service'], function(exports_1, context_1) {
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
    var core_1, city_service_1;
    var CityFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }],
        execute: function() {
            CityFilter = (function () {
                function CityFilter(cityService) {
                    this.cityService = cityService;
                    this.selectedCity = new core_1.EventEmitter();
                }
                CityFilter.prototype.ngOnInit = function () {
                    var _this = this;
                    this.cityService.getCities().then(function (cities) {
                        _this.cities = cities;
                        //Select default city
                        _this.selectedCity.emit(cities[cities.length - 1]);
                        _this.currentCity = cities[cities.length - 1];
                    });
                };
                CityFilter.prototype.onChange = function (city) {
                    this.selectedCity.emit(city);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CityFilter.prototype, "selectedCity", void 0);
                CityFilter = __decorate([
                    core_1.Component({
                        selector: 'city-filter',
                        providers: [city_service_1.CityService],
                        template: "\n    <div class=\"form-group form-group-lg\">\n      <select class=\"form-control\"\n        [ngModel]=\"currentCity\"\n        (ngModelChange)=\"onChange($event)\">\n        <option \n          *ngFor=\"let city of cities\" \n          [ngValue]=\"city\">\n          {{city.name}}\n        </option>\n      </select>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [city_service_1.CityService])
                ], CityFilter);
                return CityFilter;
            }());
            exports_1("CityFilter", CityFilter);
        }
    }
});
//# sourceMappingURL=city-filter.component.js.map