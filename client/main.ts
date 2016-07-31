import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ConferenceApp} from './components/app.component';
import {GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';
import {APPCONFIG} from './data/config';

//enableProdMode();

bootstrap(ConferenceApp, [
  HTTP_PROVIDERS,
  GOOGLE_MAPS_PROVIDERS,
  provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let mapConfig = new LazyMapsAPILoaderConfig();
    mapConfig.apiKey = APPCONFIG.mapApi;
    return mapConfig;
  }})
]);
