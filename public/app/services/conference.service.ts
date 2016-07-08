import {Injectable} from '@angular/core';
import {Conference} from '../models/conference.model';
import {CONFERENCESITES} from '../data/locations';

@Injectable()
export class ConferenceService {

  getConferenceSites(cityAlias): Promise<Conference[]> {
    return new Promise<Conference[]>(resolve =>
      setTimeout(() => resolve(CONFERENCESITES[cityAlias]), 2000) // 2 seconds
    );
  }
}
