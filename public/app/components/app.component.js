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
var loading_indicator_component_1 = require('./common/loading-indicator.component');
var conference_service_1 = require('../services/conference.service');
var city_service_1 = require('../services/city.service');
var city_state_service_1 = require('../services/city-state.service');
var ConferenceApp = (function () {
    function ConferenceApp(conferenceService, cityService, cityStateService) {
        this.conferenceService = conferenceService;
        this.cityService = cityService;
        this.cityStateService = cityStateService;
        this.loading = false;
    }
    ConferenceApp.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.cityStateService.cityAlias$.subscribe(function (city) {
            _this.selectedCity = city;
        });
        this.getCities();
    };
    ConferenceApp.prototype.getConferenceSites = function (cityAlias) {
        var _this = this;
        this.loading = true;
        this.conferenceService.getConferenceSites(cityAlias).then(function (conference) {
            _this.conferenceSites = conference;
            _this.loading = false;
        }).catch(function (error) { return _this.error = error; });
    };
    ConferenceApp.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) {
            _this.cities = cities;
        });
    };
    ConferenceApp.prototype.onSelectedCity = function (cityAlias) {
        this.cityStateService.setCity(cityAlias);
        this.getConferenceSites(cityAlias);
    };
    ConferenceApp.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    ConferenceApp = __decorate([
        core_1.Component({
            selector: 'conferences',
            directives: [facilities_component_1.Facilities, city_filter_component_1.CityFilter, loading_indicator_component_1.LoadingIndicator],
            providers: [conference_service_1.ConferenceService, city_service_1.CityService, city_state_service_1.CityStateService],
            template: "\n    <city-filter \n      [cities]=\"cities\"\n      (selectedCity)=\"onSelectedCity($event)\">\n    </city-filter>\n    <loading-indicator [isLoading]=\"loading\"></loading-indicator>\n    <conference-list \n      [facilities]=\"conferenceSites\"\n    ></conference-list>\n    {{error}}\n    "
        }), 
        __metadata('design:paramtypes', [conference_service_1.ConferenceService, city_service_1.CityService, city_state_service_1.CityStateService])
    ], ConferenceApp);
    return ConferenceApp;
}());
exports.ConferenceApp = ConferenceApp;
//# sourceMappingURL=app.component.js.map