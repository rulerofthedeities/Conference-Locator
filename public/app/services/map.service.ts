import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Marker} from '../models/map.model';

@Injectable()
export class MapService {
  private ccMarkerSelected = new Subject<number>();
  private hotelMarkers = new Subject<Marker[]>();
  private sightMarkers = new Subject<Marker[]>();

  ccMarkerSelected$ = this.ccMarkerSelected.asObservable();
  hotelMarkers$ = this.hotelMarkers.asObservable();
  sightMarkers$ = this.sightMarkers.asObservable();

  selectCcMarker(index: number) {
    this.ccMarkerSelected.next(index);
  }

  setHotelMarkers(markers: Marker[]) {
    this.hotelMarkers.next(markers);
  }

  setSightMarkers(markers: Marker[]) {
    this.sightMarkers.next(markers);
  }
}
