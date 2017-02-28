import {Injectable} from '@angular/core';
import {Location} from '../models/location.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HotelService {
  constructor(private http: Http) { }

  getNearbyHotels(location: Location) {
    return this.http.get('/api/hotels?lon=' + location.longitude + '&lat=' + location.latitude)
      .toPromise()
      .then(response => response.json().hotels)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
