import {Component, Input} from '@angular/core';
import {Location} from '../models/location.model';

@Component({
  selector: 'nearby-items',
  template: `
    <tabs>
      <tab tabTitle="Hotels nearby" alias="hotels">
        <hotels 
          [facilityLocation]="location">
        </hotels>
      </tab>
      <tab tabTitle="Sights nearby" alias="sights">
        <sights 
          [hotelLocation]="location">
        </sights>
      </tab>
    </tabs>`
})

export class NearbyItems {
  @Input() location:Location;
}
