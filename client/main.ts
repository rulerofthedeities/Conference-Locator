import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ConferenceApp} from './components/app.component';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

enableProdMode();

bootstrap(ConferenceApp, [
  HTTP_PROVIDERS,
  GOOGLE_MAPS_PROVIDERS]);
