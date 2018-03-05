import {Component, Input} from '@angular/core';
import {Marker} from '../../models/map.model';

@Component({
  selector: 'km-map-markers',
  template: `
    <agm-marker
      *ngFor="let m of markers; let i = index"
      [longitude]="m.lon"
      [latitude]="m.lat"
      [label]="m.label"
      [markerDraggable]="false"
      [iconUrl]="m.icon">
      <agm-info-window>
        <p>{{i+1}}. 
          <span *ngIf="m.url"><a href="{{m.url}}" target="_blank">{{m.infotxt}}</a></span>
          <span *ngIf="!m.url">{{m.infotxt}}</span>
        </p>
      </agm-info-window>
    </agm-marker>`
})

export class MapMarkersComponent {
  @Input() markers: Marker[];

}
