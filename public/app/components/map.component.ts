import {Component, Input} from '@angular/core';
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
      <sebm-google-map-info-window>
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

export class Map {
  @Input() location: Location;
  @Input() markers: Marker[];

  constructor(private mapService: MapService) {}

  clickedMarker(marker: Marker, index: number) {
    console.log('clicked the marker:', marker);
    marker.icon = '../assets/img/icon-star-red.png';
    //this.markers[0].icon = '../assets/img/icon-star-red.png';
    this.mapService.newccMarker(index);
  }

}
