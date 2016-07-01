import {Location} from './location';

export class Site {
  name: string;
  location: Location;

  constructor(name: string, longitude: number, latitude: number) {
    this.name = name;
    this.location = new Location(longitude, latitude);
  }
}
