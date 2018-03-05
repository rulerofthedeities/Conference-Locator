import {Injectable} from '@angular/core';
import {Conference} from '../models/conference.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConferenceService {

  constructor(private http: HttpClient) { }

  getConferenceSites(cityAlias): Observable<Conference[]> {
    return this.http
    .get<Conference[]>('/api/conferences/' + cityAlias);
  }
}
