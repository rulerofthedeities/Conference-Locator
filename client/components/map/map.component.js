System.register(['@angular/core', 'angular2-google-maps/core', '../../models/location.model', './map-markers.component', '../../services/map.service', '../../services/tabs.service'], function(exports_1, context_1) {
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
    var core_1, core_2, location_model_1, map_markers_component_1, map_service_1, tabs_service_1;
    var Map;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (location_model_1_1) {
                location_model_1 = location_model_1_1;
            },
            function (map_markers_component_1_1) {
                map_markers_component_1 = map_markers_component_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (tabs_service_1_1) {
                tabs_service_1 = tabs_service_1_1;
            }],
        execute: function() {
            Map = (function () {
                function Map(mapService, tabService) {
                    this.mapService = mapService;
                    this.tabService = tabService;
                    this.showWindow = false;
                    this.showPinType = 'hotels';
                    this.zoom = 11;
                    this.subscriptions = [];
                }
                Map.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscriptions.push(this.mapService.hotelMarkers$.subscribe(function (hotels) { return _this.hotelMarkers = hotels; }));
                    this.subscriptions.push(this.mapService.sightMarkers$.subscribe(function (sights) { return _this.sightMarkers = sights; }));
                    this.subscriptions.push(this.mapService.ccMarkerSelected$.subscribe(function (index) { return _this.selectCcMarker(index); }));
                    this.subscriptions.push(this.mapService.sightMarkerSelected$.subscribe(function (index) { return _this.selectItemMarker(_this.sightMarkers, index); }));
                    this.subscriptions.push(this.mapService.hotelMarkerSelected$.subscribe(function (index) { return _this.selectItemMarker(_this.hotelMarkers, index); }));
                    this.subscriptions.push(this.tabService.tabs$.subscribe(function (tab) { return _this.showPinType = tab; }));
                };
                Map.prototype.clickedMarker = function (marker, index) {
                    this.selectCcMarker(index);
                    this.mapService.selectCcMarker(index);
                };
                Map.prototype.selectCcMarker = function (index) {
                    var redIcon = '../assets/img/icon-star-red.png';
                    this.ccMarkers
                        .filter(function (marker) { return marker.icon === redIcon; })
                        .forEach(function (marker) { return marker.icon = '../assets/img/icon-star-blue.png'; });
                    if (index !== null) {
                        this.centerMap(index);
                        this.ccMarkers[index].icon = redIcon;
                    }
                };
                Map.prototype.selectItemMarker = function (markers, index) {
                    var color = this.showPinType === 'hotels' ? 'blue' : 'green';
                    var redIcon = '../assets/img/icon-pin-red.png';
                    markers
                        .filter(function (marker) { return marker.icon === redIcon; })
                        .forEach(function (marker) { return marker.icon = '../assets/img/icon-pin-' + color + '.png'; });
                    markers[index].icon = redIcon;
                };
                Map.prototype.centerMap = function (index) {
                    var marker = this.ccMarkers[index];
                    this.location.longitude = marker.lon;
                    this.location.latitude = marker.lat;
                };
                Map.prototype.showPins = function (tab) {
                    return tab === this.showPinType;
                };
                Map.prototype.ngOnDestroy = function () {
                    this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', location_model_1.Location)
                ], Map.prototype, "location", void 0);
                __decorate([
                    core_1.Input('markers'), 
                    __metadata('design:type', Array)
                ], Map.prototype, "ccMarkers", void 0);
                Map = __decorate([
                    core_1.Component({
                        selector: 'map',
                        directives: [core_2.GOOGLE_MAPS_DIRECTIVES, map_markers_component_1.MapMarkers],
                        template: "\n  <sebm-google-map \n    [longitude]=\"location.longitude\"\n    [latitude]=\"location.latitude\"\n    [zoom]=\"zoom\">\n\n    <map-markers *ngIf=\"showPins('hotels')\"\n      [markers]=\"hotelMarkers\">\n    </map-markers>\n\n    <map-markers *ngIf=\"showPins('sights')\"\n      [markers]=\"sightMarkers\">\n    </map-markers>\n\n    <sebm-google-map-marker \n      *ngFor=\"let m of ccMarkers; let i = index\"\n      (markerClick)=\"clickedMarker(m, i)\"\n      [longitude]=\"m.lon\"\n      [latitude]=\"m.lat\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"false\"\n      [iconUrl]=\"m.icon\">\n      <sebm-google-map-info-window *ngIf=\"showWindow\">\n          <p>{{title}}</p>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n\n  </sebm-google-map> {{windowHeight}}",
                        styles: ["\n    .sebm-google-map-container {\n      height: 600px;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [map_service_1.MapService, tabs_service_1.TabService])
                ], Map);
                return Map;
            }());
            exports_1("Map", Map);
        }
    }
});
//# sourceMappingURL=map.component.js.map