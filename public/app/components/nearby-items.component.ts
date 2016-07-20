import {Component, Input} from '@angular/core';
import {Location} from '../models/location.model';
import {Hotels} from './hotels.component';
import {Sights} from './sights.component';
import {Tabs} from './common/tabs.component';
import {Tab} from './common/tab.component';

@Component({
  selector: 'nearby-items',
  directives: [Hotels, Sights, Tabs, Tab],
  template: `
    <tabs>
      <tab tabTitle="Hotels nearby">
        <hotels 
          [facilityLocation]="location">
        </hotels>
      </tab>
      <tab tabTitle="Sights nearby">
        <sights 
          [hotelLocation]="location">
        </sights>
      </tab>
    </tabs>`
})

export class NearbyItems {
  @Input() location:Location;
}
