import { Injectable } from '@angular/core';
import { HOTELS } from '../data/locations';
import {Location} from '../models/location.model';

@Injectable()
export class HotelService {
	getNearbyHotels(location: Location) {
		return Promise.resolve(HOTELS);
	}
}
