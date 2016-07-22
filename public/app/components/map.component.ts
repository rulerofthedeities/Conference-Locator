import {Component, Input, OnInit} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {Location} from '../models/location.model';
import {Marker} from '../models/map.model';
import {MapService} from '../services/map.service';

@Component({
  selector: 'map',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  template: `
  <sebm-google-map 
    [longitude]="location.longitude"
    [latitude]="location.latitude"
    [zoom]="11">

    <sebm-google-map-marker 
      *ngFor="let m of markers; let i = index"
      (markerClick)="clickedMarker(m, i)"
      [longitude]="m.lon"
      [latitude]="m.lat"
      [label]="m.label"
      [markerDraggable]="m.draggable"
      [iconUrl]="m.icon">
      <sebm-google-map-info-window *ngIf="showWindow">
          <p>{{m.infotxt}}</p>
      </sebm-google-map-info-window>
    </sebm-google-map-marker>

    <sebm-google-map-marker 
      *ngFor="let m of hotelMarkers; let i = index"
      (markerClick)="clickedMarker(m, i)"
      [longitude]="m.lon"
      [latitude]="m.lat"
      [label]="m.label"
      [markerDraggable]="m.draggable"
      [iconUrl]="m.icon">
      <sebm-google-map-info-window *ngIf="showWindow">
          <p>{{m.infotxt}}</p>
      </sebm-google-map-info-window>
    </sebm-google-map-marker>

  </sebm-google-map>`,
  styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
`]
})

export class Map implements OnInit {
  @Input() location: Location;
  @Input() markers: Marker[];
  hotelMarkers : Marker[];
  showWindow = false;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.hotelMarkers$.subscribe(
      hotels => {
        this.hotelMarkers = hotels;
        console.log('hotels', hotels);}
    );
    this.mapService.ccMarkerSelected$.subscribe(
      index => {this.selectMarker(index);}
    );
  }

  clickedMarker(marker: Marker, index: number) {
    console.log('markeridx', index);
    this.selectMarker(index);
    this.mapService.selectCcMarker(index);
  }

  selectMarker(index: number) {
    console.log('markeridx2', index);
    this.markers.forEach((marker) => {
      if (marker.icon === '../assets/img/icon-star-red.png') {
        marker.icon = '../assets/img/icon-star-blue.png';
      }});
    console.log('Setting marker index icon', index);
    this.markers[index].icon = '../assets/img/icon-star-red.png';
  }

}
