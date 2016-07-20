import {Component, OnInit, OnDestroy} from '@angular/core';
import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Facilities} from './facilities.component';
import {CityFilter} from './city-filter.component';
import {LoadingIndicator} from './common/loading-indicator.component';
import {ConferenceService} from '../services/conference.service';
import {CityService} from '../services/city.service';
import {CityStateService} from '../services/city-state.service';
import {Subscription}   from 'rxjs/Subscription';
import {MapsTest} from './maptest.component';

@Component({
	selector: 'conferences',
	directives: [Facilities, CityFilter, LoadingIndicator, MapsTest],
	providers: [ConferenceService, CityService, CityStateService],
	template: `
    <div class="container">
      <maps-test></maps-test>
      <div class="row">
        <city-filter 
          [cities]="cities"
          (selectedCity)="onSelectedCity($event)">
        </city-filter>
      </div>
      <div class="row">
        <loading-indicator [isLoading]="loading"></loading-indicator>
        <conference-list 
          [facilities]="conferenceSites"
        ></conference-list>
        {{error}}
      </div>
    </div>
    `
})

export class ConferenceApp implements OnInit, OnDestroy {
	public conferenceSites: Conference[];
  public cities: City[];
  selectedCity: string;
  subscription: Subscription;
  loading: boolean = false;
  error: string;

	constructor(
    private conferenceService: ConferenceService,
    private cityService: CityService,
    private cityStateService: CityStateService) {
  }

	ngOnInit() {
    this.subscription = this.cityStateService.cityAlias$.subscribe(
      city => {
        this.selectedCity = city;
      });
    this.getCities();
	}

  getConferenceSites(cityAlias) {
    this.loading = true;
    this.conferenceService.getConferenceSites(cityAlias).then(
      conference => {
        this.conferenceSites = conference;
        this.loading = false;
      }
    ).catch(error => this.error = error);
  }

  getCities() {
    this.cityService.getCities().then(
      cities => {
        this.cities = cities;
      }
    );
  }

  onSelectedCity(cityAlias: string) {
    this.cityStateService.setCity(cityAlias);
    this.getConferenceSites(cityAlias);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
