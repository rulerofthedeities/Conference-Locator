import {Component, OnInit, OnDestroy} from '@angular/core';
import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Marker} from '../models/map.model';
import {Facilities} from './facilities.component';
import {CityFilter} from './city-filter.component';
import {LoadingIndicator} from './common/loading-indicator.component';
import {ConferenceService} from '../services/conference.service';
import {CityStateService} from '../services/city-state.service';
import {TabService} from '../services/tabs.service';
import {Subscription}   from 'rxjs/Subscription';

@Component({
	selector: 'conferences',
	directives: [Facilities, CityFilter, LoadingIndicator],
	providers: [ConferenceService, CityStateService, TabService],
	template: `
    <div class="container">
      <div class="row">
        <city-filter 
          [cities]="cities"
          (selectedCity)="onSelectedCity($event)">
        </city-filter>
      </div>
      <div class="row panel panel-default" *ngIf="selectedCity">
        <loading-indicator 
          [isLoading]="loading"
          message="Loading conference centers">
        </loading-indicator>
        <conference-list 
          [facilities]="conferenceSites"
          [markers] = "markers"
          [city]="selectedCity">
        </conference-list>
        {{error}}
      </div>
    </div>
    `,
    styles: [`
      .panel {padding-top:10px;}
    `]
})

export class ConferenceApp implements OnInit, OnDestroy {
	public conferenceSites: Conference[];
  public cities: City[];
  selectedCity: City;
  markers: Marker[] = [];
  subscription: Subscription;
  loading: boolean = false;
  error: string;

	constructor(
    private conferenceService: ConferenceService,
    private cityStateService: CityStateService) {
  }

	ngOnInit() {
    this.subscription = this.cityStateService.city$.subscribe(
      city => {
        this.selectedCity = city;
        this.markers = [];
      });
	}

  getConferenceSites(cityAlias) {
    this.loading = true;
    this.conferenceService.getConferenceSites(cityAlias).then(
      conferences => {
        this.conferenceSites = conferences;
        this.createMarkers(conferences);
        this.loading = false;
      }
    ).catch(error => this.error = error);
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
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
