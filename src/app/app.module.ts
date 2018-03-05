import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from '@agm/core';

import {APPCONFIG} from './data/config';

import {CityStateService} from './services/city-state.service';
import {CityService} from './services/city.service';
import {ConferenceService} from './services/conference.service';
import {HotelService} from './services/hotel.service';
import {MapService} from './services/map.service';
import {SightService} from './services/sight.service';
import {TabService} from './services/tabs.service';

import {MeterPipe} from './pipes/meters.pipe';

import {ConferenceAppComponent} from './components/app.component';
import {CityFilterComponent} from './components/city-filter.component';
import {FacilitiesComponent} from './components/facilities.component';
import {FacilityRowComponent} from './components/facility-row.component';
import {HotelRowComponent} from './components/hotel-row.component';
import {HotelsComponent} from './components/hotels.component';
import {NearbyItemsComponent} from './components/nearby-items.component';
import {SightRowComponent} from './components/sight-row.component';
import {SightsComponent} from './components/sights.component';
import {MapComponent} from './components/map/map.component';
import {MapMarkersComponent} from './components/map/map-markers.component';
import {TabComponent} from './components/tabs/tab.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {LoadingIndicatorComponent} from './components/loading-indicator.component';
import {ItemComponent} from './components/item.component';

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
    ConferenceAppComponent,
    CityFilterComponent,
    FacilitiesComponent,
    FacilityRowComponent,
    HotelRowComponent,
    HotelsComponent,
    NearbyItemsComponent,
    SightRowComponent,
    SightsComponent,
    MapComponent,
    MapMarkersComponent,
    TabComponent,
    TabsComponent,
    LoadingIndicatorComponent,
    ItemComponent,
    MeterPipe
  ],
  bootstrap: [ConferenceAppComponent]
})
export class AppModule {}
