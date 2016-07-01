import { Injectable } from '@angular/core';
import { HOTELS } from '../data/locations';
import {Location} from '../model/location';

@Injectable()
export class HotelService {
	getNearbyHotels(location: Location) {
		return Promise.resolve(HOTELS);
	}
}
