import {Injectable} from '@angular/core';
import {Location} from '../models/location.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SightService {
  constructor(private http: Http) { }

  getNearbySights(location: Location) {
    return this.http.get('/sights?lon=' + location.longitude + '&lat=' + location.latitude)
      .toPromise()
      .then(response => response.json().sights)
      .catch(this.handleError);
    }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
