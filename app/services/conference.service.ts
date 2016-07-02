import { Injectable } from '@angular/core';
import { CONFERENCESITES } from '../data/locations';

@Injectable()
export class ConferenceService {
	getConferenceSites(cityAlias) {
		return Promise.resolve(CONFERENCESITES[cityAlias]);
	}
}
