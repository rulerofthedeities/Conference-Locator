import {Injectable} from '@angular/core';
import {Conference} from '../models/conference.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConferenceService {

  constructor(private http: Http) { }

  getConferenceSites(cityAlias): Promise<Conference[]> {
    return this.http.get('/api/conferences/' + cityAlias)
      .toPromise()
      .then(response => response.json().conferences)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
