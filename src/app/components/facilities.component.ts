import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Marker} from '../models/map.model';

@Component({
  selector: 'km-conference-list',
  template: `
    <div class="col-md-6">
      <ul class="list-unstyled ccs">
        <km-facility-row 
          [facility]="facility" 
          *ngFor="let facility of facilities; let i = index"
          [i] = "i">
        </km-facility-row>
      </ul>
    </div>
    <div class="col-md-6">
      <km-map
        [location]="city.location"
        [markers]="markers">
      </km-map>
    </div>
  `,
  styles: [`
    .ccs {
      height:600px;
      overflow-y:scroll;
    }
    map {
      border: 1px solid #666;
      display: block;
    }
  `]
})

export class FacilitiesComponent {
  @Input() facilities: Conference[];
  @Input() markers: Marker[];
  @Input() city: City;
}
