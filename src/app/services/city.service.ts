import {Injectable} from '@angular/core';
import {Location} from '../models/location.model';
import {City} from '../models/city.model';

@Injectable()
export class CityService {

  getCities() {
    const locParis: Location = new Location();
    locParis.longitude = 2.3366968536376953;
    locParis.latitude = 48.85786103480091;

    const locPrague: Location = new Location();
    locPrague.longitude = 14.416843124389648;
    locPrague.latitude = 50.083471541270624;

    const locLondon: Location = new Location();
    locLondon.longitude = -0.1253890380859375;
    locLondon.latitude = 51.511092905004745;

    const cities: City[] = [
      {name: 'London', alias: 'london', location: locLondon},
      {name: 'Paris', alias: 'paris', location: locParis},
      {name: 'Prague', alias: 'prague', location: locPrague}
    ];

    return Promise.resolve(cities);
  }
}
