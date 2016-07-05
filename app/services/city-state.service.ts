import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CityStateService {
  private _cityAlias = new Subject<string>();

  cityAlias$ = this._cityAlias.asObservable();

  setCity(city: string) {
    this._cityAlias.next(city);
  }
}
