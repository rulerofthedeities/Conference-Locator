import {Component, OnInit, OnDestroy} from '@angular/core';
import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Marker} from '../models/map.model';
import {ConferenceService} from '../services/conference.service';
import {CityStateService} from '../services/city-state.service';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../environments/environment';
@Component({
  selector: 'km-app-root',
  template: `
    <div class="container">
      <div class="row">
        <km-city-filter
          (selectedCity)="onSelectedCity($event)">
        </km-city-filter>
      </div>
      <div class="row panel panel-default" *ngIf="selectedCity">
        <km-loading-indicator
          [isLoading]="loading"
          message="Loading conference centers">
        </km-loading-indicator>
        <km-conference-list
          [facilities]="conferenceSites"
          [markers] = "markers"
          [city]="selectedCity">
        </km-conference-list>
        {{error}}
      </div>
    </div>
    <div class="version">{{appVersion}} Angular 5</div>`,
  styles: [`
    .panel {
      padding-top: 10px;
    }
    .version {
      font-size: 8px;
      color: grey;
    }
  `]
})

export class ConferenceAppComponent implements OnInit, OnDestroy {
  conferenceSites: Conference[];
  cities: City[];
  selectedCity: City;
  markers: Marker[] = [];
  subscription: Subscription;
  loading = false;
  error: string;
  appVersion = environment.version;

  constructor(
    private conferenceService: ConferenceService,
    private cityStateService: CityStateService
  ) {}

  ngOnInit() {
    this.subscription = this.cityStateService.city$.subscribe(
      city => {
        this.selectedCity = city;
        this.markers = [];
      }
    );
  }

  getConferenceSites(cityAlias) {
    this.loading = true;
    this.conferenceService
    .getConferenceSites(cityAlias)
    .subscribe(
      data => {
        this.conferenceSites = data['conferences'];
        this.createMarkers(data['conferences']);
        this.loading = false;
      },
      error => this.error = error
    );
  }

  onSelectedCity(city: City) {
    this.cityStateService.setCity(city);
    this.getConferenceSites(city.alias);
  }

  createMarkers(conferences: Conference[]) {
    conferences.forEach(conference => {
      this.markers.push({
        lat: conference.location.latitude,
        lon: conference.location.longitude,
        infotxt: conference.name,
        icon: '../assets/img/icon-star-blue.png'});
      }
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
