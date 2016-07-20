import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {City} from '../models/city.model';

@Injectable()
export class CityStateService {
  private _city = new Subject<City>();

  city$ = this._city.asObservable();

  setCity(city: City) {
    this._city.next(city);
  }
}
