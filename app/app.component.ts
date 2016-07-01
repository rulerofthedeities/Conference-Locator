import {Component, OnInit} from '@angular/core';

import {Conference} from './models/conference.model';
import {Facilities} from './facilities.component';
import {ConferenceService} from './services/conference.service';


@Component({
	selector: 'conferences',
	directives: [Facilities],
	providers: [ConferenceService],
	template: `
    <conference-list 
      [facilities]="conferenceSites"
    ></conference-list>`
})

export class ConferenceApp {
	public conferenceSites: Conference[];

	constructor(private conferenceService: ConferenceService) {}

	ngOnInit() {
    this.getConferenceSites();
	}

  getConferenceSites() {
    this.conferenceService.getConferenceSites().then(
      conferences => this.conferenceSites = conferences
    );
  }
}
