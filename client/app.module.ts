import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AgmCoreModule} from 'angular2-google-maps/core';

import {APPCONFIG} from './data/config';

import {CityStateService} from './services/city-state.service';
import {CityService} from './services/city.service';
import {ConferenceService} from './services/conference.service';
import {HotelService} from './services/hotel.service';
import {MapService} from './services/map.service';
import {SightService} from './services/sight.service';
import {TabService} from './services/tabs.service';

import {MeterPipe} from './pipes/meters.pipe';

import {ConferenceApp} from './components/app.component';
import {CityFilter} from './components/city-filter.component';
import {Facilities} from './components/facilities.component';
import {FacilityRow} from './components/facility-row.component';
import {HotelRow} from './components/hotel-row.component';
import {Hotels} from './components/hotels.component';
import {NearbyItems} from './components/nearby-items.component';
import {SightRow} from './components/sight-row.component';
import {Sights} from './components/sights.component';
import {Map} from './components/map/map.component';
import {MapMarkers} from './components/map/map-markers.component';
import {Tab} from './components/common/tab.component';
import {Tabs} from './components/common/tabs.component';
import {LoadingIndicator} from './components/common/loading-indicator.component';
import {Item} from './components/common/item.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: APPCONFIG.mapApi
    })
  ],
  providers: [
    CityStateService,
    CityService,
    ConferenceService,
    HotelService,
    MapService,
    SightService,
    TabService
  ],
  declarations: [
    ConferenceApp,
    CityFilter,
    Facilities,
    FacilityRow,
    HotelRow,
    Hotels,
    NearbyItems,
    SightRow,
    Sights,
    Map,
    MapMarkers,
    Tab,
    Tabs,
    LoadingIndicator,
    Item,
    MeterPipe
  ],
  bootstrap: [ ConferenceApp ]
})
export class AppModule {}

