import {Component, Input} from '@angular/core';
import {Location} from '../models/location.model';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
  selector: 'map',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  template: `
  <sebm-google-map 
    [longitude]="location.longitude"
    [latitude]="location.latitude">
    <sebm-google-map-marker 
      [longitude]="lng"
      [latitude]="lat">
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
  lat: number = 51.678418;
  lng: number = 7.809007;
}

