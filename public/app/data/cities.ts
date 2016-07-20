import {Location} from '../models/location.model';
import {City} from '../models/city.model';

let locParis: Location = new Location();
locParis.longitude = 2.3366968536376953;
locParis.latitude = 48.85786103480091;

let locPrague: Location = new Location();
locPrague.longitude = 14.416843124389648;
locPrague.latitude = 50.083471541270624;

export const CITIES: City[] = [
	{name:'Prague', alias: 'prague', location: locPrague},
	{name:'Paris', alias: 'paris', location: locParis}
];
