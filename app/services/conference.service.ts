import {Injectable} from '@angular/core';
import {CONFERENCESITES} from '../data/locations';
import {Conference} from '../models/conference.model';

@Injectable()
export class ConferenceService {

  getConferenceSites(cityAlias) {
	  return new Promise<Conference[]>(resolve =>
      setTimeout(() => resolve(CONFERENCESITES[cityAlias]), 2000) // 2 seconds
    );
  }
}
