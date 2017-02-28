import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Marker} from '../models/map.model';

@Injectable()
export class MapService {
  private ccMarkerSelected = new Subject<number>();
  private sightMarkerSelected = new Subject<number>();
  private hotelMarkerSelected = new Subject<number>();
  private hotelMarkers = new Subject<Marker[]>();
  private sightMarkers = new Subject<Marker[]>();

  ccMarkerSelected$ = this.ccMarkerSelected.asObservable();
  sightMarkerSelected$ = this.sightMarkerSelected.asObservable();
  hotelMarkerSelected$ = this.hotelMarkerSelected.asObservable();
  hotelMarkers$ = this.hotelMarkers.asObservable();
  sightMarkers$ = this.sightMarkers.asObservable();

  setHotelMarkers(markers: Marker[]) {
    this.hotelMarkers.next(markers);
  }

  setSightMarkers(markers: Marker[]) {
    this.sightMarkers.next(markers);
  }

  selectCcMarker(index: number) {
    this.ccMarkerSelected.next(index);
  }

  selectSightMarker(index: number) {
    this.sightMarkerSelected.next(index);
  }

  selectHotelMarker(index: number) {
    this.hotelMarkerSelected.next(index);
  }
}
