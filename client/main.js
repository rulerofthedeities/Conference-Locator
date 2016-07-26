System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/http', './components/app.component', 'angular2-google-maps/core', './data/config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, http_1, app_component_1, core_2, config_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_component_1.ConferenceApp, [
                http_1.HTTP_PROVIDERS,
                core_2.GOOGLE_MAPS_PROVIDERS,
                core_1.provide(core_2.LazyMapsAPILoaderConfig, { useFactory: function () {
                        var mapConfig = new core_2.LazyMapsAPILoaderConfig();
                        mapConfig.apiKey = config_1.APPCONFIG.mapApi;
                        return mapConfig;
                    } })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map