import {Injectable} from '@angular/core';
import {SIGHTS} from '../data/locations';
import {Location} from '../models/location.model';

@Injectable()
export class SightService {
	getNearbySights(location: Location) {
		return Promise.resolve(SIGHTS);
	}
}
