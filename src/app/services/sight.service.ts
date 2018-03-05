import {Injectable} from '@angular/core';
import {Location} from '../models/location.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SightService {
  constructor(private http: HttpClient) { }

  getNearbySights(location: Location) {
    return this.http
    .get('/api/sights?lon=' + location.longitude + '&lat=' + location.latitude);
  }
}
