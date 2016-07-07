import {Injectable} from '@angular/core';
import {HOTELS} from '../data/locations';
import {Location} from '../models/location.model';
import {Hotel} from '../models/hotel.model';

@Injectable()
export class HotelService {
	getNearbyHotels(location: Location) {
		//return Promise.resolve(HOTELS);
	  return new Promise<Hotel[]>(resolve =>
      setTimeout(() => resolve(HOTELS), 2000) // 2 seconds
    );
	}
}
