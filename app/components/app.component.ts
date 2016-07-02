import {Component, OnInit} from '@angular/core';

import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Facilities} from './facilities.component';
import {CityFilter} from './city-filter.component';
import {ConferenceService} from '../services/conference.service';
import {CityService} from '../services/city.service';


@Component({
	selector: 'conferences',
	directives: [Facilities, CityFilter],
	providers: [ConferenceService, CityService],
	template: `
    <city-filter 
      [cities]="cities"
      [defaultCity]="defaultCity"
      (selectedCity)="onSelectedCity($event)">
    </city-filter>
    <conference-list 
      [facilities]="conferenceSites"
    ></conference-list>
    {{selectedCity}}`
})

export class ConferenceApp {
	public conferenceSites: Conference[];
  public cities: City[];
  public defaultCity: string;
  selectedCity: string;

	constructor(private conferenceService: ConferenceService,
    private cityService: CityService) {}

	ngOnInit() {
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
        this.defaultCity = cities[0].alias;
        this.getConferenceSites(this.defaultCity);
      }
    );
  }

  onSelectedCity(cityAlias: string) {
    this.getConferenceSites(cityAlias);
  }
}
