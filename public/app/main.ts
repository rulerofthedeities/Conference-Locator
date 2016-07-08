import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ConferenceApp} from './components/app.component';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(ConferenceApp, [HTTP_PROVIDERS]);
