import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  selector: 'maps-test',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  template: `
  <sebm-google-map [latitude]="lat" [longitude]="lng">
    <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
  </sebm-google-map>`,
  styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
`]
})

export class MapsTest {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}

