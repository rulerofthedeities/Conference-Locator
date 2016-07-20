"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app.component');
var http_1 = require('@angular/http');
var core_1 = require('angular2-google-maps/core');
platform_browser_dynamic_1.bootstrap(app_component_1.ConferenceApp, [
    http_1.HTTP_PROVIDERS,
    core_1.GOOGLE_MAPS_PROVIDERS]);
//# sourceMappingURL=main.js.map