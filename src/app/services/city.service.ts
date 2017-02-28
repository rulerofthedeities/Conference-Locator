import {Injectable} from '@angular/core';
import {CITIES} from '../data/cities';

@Injectable()
export class CityService {
  getCities() {
    return Promise.resolve(CITIES);
  }
}
