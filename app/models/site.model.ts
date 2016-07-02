import {Location} from './location.model';

export class Site {
  location: Location;
  name: string;
  cityAlias: string;

  constructor(longitude: number, latitude: number) {
    this.location = new Location(longitude, latitude);
  }
}
