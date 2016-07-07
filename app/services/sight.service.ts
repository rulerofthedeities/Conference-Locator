import {Injectable} from '@angular/core';
import {SIGHTS} from '../data/locations';
import {Location} from '../models/location.model';
import {Sight} from '../models/sight.model';

@Injectable()
export class SightService {
	getNearbySights(location: Location) {
		//return Promise.resolve(SIGHTS);
	  return new Promise<Sight[]>(resolve =>
      setTimeout(() => resolve(SIGHTS), 2000) // 2 seconds
    );
	}
}
