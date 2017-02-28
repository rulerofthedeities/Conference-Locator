import {Component, Input} from '@angular/core';
import {Location} from '../models/location.model';

@Component({
  selector: 'km-nearby-items',
  template: `
    <km-tabs>
      <km-tab tabTitle="Hotels nearby" alias="hotels">
        <km-hotels 
          [facilityLocation]="location">
        </km-hotels>
      </km-tab>
      <km-tab tabTitle="Sights nearby" alias="sights">
        <km-sights 
          [hotelLocation]="location">
        </km-sights>
      </km-tab>
    </km-tabs>`
})

export class NearbyItemsComponent {
  @Input() location: Location;
}
