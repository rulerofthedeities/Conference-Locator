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
var facilities_component_1 = require('./facilities.component');
var city_filter_component_1 = require('./city-filter.component');
var conference_service_1 = require('./services/conference.service');
var city_service_1 = require('./services/city.service');
var ConferenceApp = (function () {
    function ConferenceApp(conferenceService, cityService) {
        this.conferenceService = conferenceService;
        this.cityService = cityService;
    }
    ConferenceApp.prototype.ngOnInit = function () {
        this.getCities();
    };
    ConferenceApp.prototype.getConferenceSites = function (cityAlias) {
        var _this = this;
        this.conferenceService.getConferenceSites(cityAlias).then(function (conferences) { return _this.conferenceSites = conferences; });
    };
    ConferenceApp.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) {
            _this.cities = cities;
            _this.defaultCity = cities[0].alias;
            _this.getConferenceSites(_this.defaultCity);
        });
    };
    ConferenceApp.prototype.onSelectedCity = function (cityAlias) {
        console.log('parent', cityAlias);
        this.getConferenceSites(cityAlias);
    };
    ConferenceApp = __decorate([
        core_1.Component({
            selector: 'conferences',
            directives: [facilities_component_1.Facilities, city_filter_component_1.CityFilter],
            providers: [conference_service_1.ConferenceService, city_service_1.CityService],
            template: "\n    <city-filter \n      [cities]=\"cities\"\n      [defaultCity]=\"defaultCity\"\n      (selectedCity)=\"onSelectedCity($event)\">\n    </city-filter>\n    <conference-list \n      [facilities]=\"conferenceSites\"\n    ></conference-list>\n    {{selectedCity}}"
        }), 
        __metadata('design:paramtypes', [conference_service_1.ConferenceService, city_service_1.CityService])
    ], ConferenceApp);
    return ConferenceApp;
}());
exports.ConferenceApp = ConferenceApp;
//# sourceMappingURL=app.component.js.map