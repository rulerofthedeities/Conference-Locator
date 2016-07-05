import {Component, OnInit, OnDestroy} from '@angular/core';
import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Facilities} from './facilities.component';
import {CityFilter} from './city-filter.component';
import {ConferenceService} from '../services/conference.service';
import {CityService} from '../services/city.service';
import {CityStateService} from '../services/city-state.service';
import {Subscription}   from 'rxjs/Subscription';


@Component({
	selector: 'conferences',
	directives: [Facilities, CityFilter],
	providers: [ConferenceService, CityService, CityStateService],
	template: `
    <city-filter 
      [cities]="cities"
      (selectedCity)="onSelectedCity($event)">
    </city-filter>
    <conference-list 
      [facilities]="conferenceSites"
    ></conference-list>`
})

export class ConferenceApp implements OnInit, OnDestroy {
	public conferenceSites: Conference[];
  public cities: City[];
  selectedCity: string;
  subscription: Subscription;

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
    this.conferenceService.getConferenceSites(cityAlias).then(
      conferences => this.conferenceSites = conferences
    );
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
