import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ConferenceApp} from './components/app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

bootstrap(ConferenceApp, [
  HTTP_PROVIDERS,
  GOOGLE_MAPS_PROVIDERS]);
