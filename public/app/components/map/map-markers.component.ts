import {Component, Input} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {Marker} from '../../models/map.model';

@Component({
  selector: 'map-markers',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  template: `
    <sebm-google-map-marker
      *ngFor="let m of markers; let i = index"
      [longitude]="m.lon"
      [latitude]="m.lat"
      [label]="m.label"
      [markerDraggable]="m.draggable"
      [iconUrl]="m.icon">
      <sebm-google-map-info-window>
          <p>{{i+1}}. {{m.infotxt}}</p>
      </sebm-google-map-info-window>
    </sebm-google-map-marker>`
})

export class MapMarkers {
  @Input() markers: Marker[];
}
