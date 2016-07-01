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
var conference_service_1 = require('./services/conference.service');
var ConferenceApp = (function () {
    function ConferenceApp(conferenceService) {
        this.conferenceService = conferenceService;
    }
    ConferenceApp.prototype.ngOnInit = function () {
        this.getConferenceSites();
    };
    ConferenceApp.prototype.getConferenceSites = function () {
        var _this = this;
        this.conferenceService.getConferenceSites().then(function (conferences) { return _this.conferenceSites = conferences; });
    };
    ConferenceApp = __decorate([
        core_1.Component({
            selector: 'conferences',
            directives: [facilities_component_1.Facilities],
            providers: [conference_service_1.ConferenceService],
            template: "\n    <conference-list \n      [facilities]=\"conferenceSites\"\n    ></conference-list>"
        }), 
        __metadata('design:paramtypes', [conference_service_1.ConferenceService])
    ], ConferenceApp);
    return ConferenceApp;
}());
exports.ConferenceApp = ConferenceApp;
//# sourceMappingURL=app.component.js.map