System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', 'angular2-google-maps/core', './data/config', './services/city-state.service', './services/city.service', './services/conference.service', './services/hotel.service', './services/map.service', './services/sight.service', './services/tabs.service', './pipes/meters.pipe', './components/app.component', './components/city-filter.component', './components/facilities.component', './components/facility-row.component', './components/hotel-row.component', './components/hotels.component', './components/nearby-items.component', './components/sight-row.component', './components/sights.component', './components/map/map.component', './components/map/map-markers.component', './components/common/tab.component', './components/common/tabs.component', './components/common/loading-indicator.component', './components/common/item.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, core_2, config_1, city_state_service_1, city_service_1, conference_service_1, hotel_service_1, map_service_1, sight_service_1, tabs_service_1, meters_pipe_1, app_component_1, city_filter_component_1, facilities_component_1, facility_row_component_1, hotel_row_component_1, hotels_component_1, nearby_items_component_1, sight_row_component_1, sights_component_1, map_component_1, map_markers_component_1, tab_component_1, tabs_component_1, loading_indicator_component_1, item_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (city_state_service_1_1) {
                city_state_service_1 = city_state_service_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            },
            function (conference_service_1_1) {
                conference_service_1 = conference_service_1_1;
            },
            function (hotel_service_1_1) {
                hotel_service_1 = hotel_service_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (sight_service_1_1) {
                sight_service_1 = sight_service_1_1;
            },
            function (tabs_service_1_1) {
                tabs_service_1 = tabs_service_1_1;
            },
            function (meters_pipe_1_1) {
                meters_pipe_1 = meters_pipe_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (city_filter_component_1_1) {
                city_filter_component_1 = city_filter_component_1_1;
            },
            function (facilities_component_1_1) {
                facilities_component_1 = facilities_component_1_1;
            },
            function (facility_row_component_1_1) {
                facility_row_component_1 = facility_row_component_1_1;
            },
            function (hotel_row_component_1_1) {
                hotel_row_component_1 = hotel_row_component_1_1;
            },
            function (hotels_component_1_1) {
                hotels_component_1 = hotels_component_1_1;
            },
            function (nearby_items_component_1_1) {
                nearby_items_component_1 = nearby_items_component_1_1;
            },
            function (sight_row_component_1_1) {
                sight_row_component_1 = sight_row_component_1_1;
            },
            function (sights_component_1_1) {
                sights_component_1 = sights_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (map_markers_component_1_1) {
                map_markers_component_1 = map_markers_component_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (loading_indicator_component_1_1) {
                loading_indicator_component_1 = loading_indicator_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            core_2.AgmCoreModule.forRoot({
                                apiKey: config_1.APPCONFIG.mapApi
                            })
                        ],
                        providers: [
                            city_state_service_1.CityStateService,
                            city_service_1.CityService,
                            conference_service_1.ConferenceService,
                            hotel_service_1.HotelService,
                            map_service_1.MapService,
                            sight_service_1.SightService,
                            tabs_service_1.TabService
                        ],
                        declarations: [
                            app_component_1.ConferenceApp,
                            city_filter_component_1.CityFilter,
                            facilities_component_1.Facilities,
                            facility_row_component_1.FacilityRow,
                            hotel_row_component_1.HotelRow,
                            hotels_component_1.Hotels,
                            nearby_items_component_1.NearbyItems,
                            sight_row_component_1.SightRow,
                            sights_component_1.Sights,
                            map_component_1.Map,
                            map_markers_component_1.MapMarkers,
                            tab_component_1.Tab,
                            tabs_component_1.Tabs,
                            loading_indicator_component_1.LoadingIndicator,
                            item_component_1.Item,
                            meters_pipe_1.MeterPipe
                        ],
                        bootstrap: [app_component_1.ConferenceApp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map