import {Injectable} from '@angular/core';
import {Location} from '../models/location.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Hotel} from '../models/hotel.model';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) { }

  getNearbyHotels(location: Location): Observable<Hotel[]> {
    return this.http
    .get<Hotel[]>('/api/hotels?lon=' + location.longitude + '&lat=' + location.latitude);
  }
}
