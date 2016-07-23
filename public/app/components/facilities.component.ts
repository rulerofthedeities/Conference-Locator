import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {City} from '../models/city.model';
import {Marker} from '../models/map.model';
import {FacilityRow} from './facility-row.component';
import {Map} from './map/map.component';
import {MapService} from '../services/map.service';

@Component({
  selector: 'conference-list',
  directives: [FacilityRow, Map],
  providers: [MapService],
  template: `
  <div class="col-md-6">
    <ul class="list-unstyled ccs">
      <facility-row 
        [facility]="facility" 
        *ngFor="let facility of facilities; let i = index"
        [i] = "i">
      </facility-row>
    </ul>
  </div>
  <div class="col-md-6">
    <map
      [location]="city.location"
      [markers]="markers">
    </map>
  </div>
   `,
  styles: [`
    .ccs {height:600px;overflow-y:scroll;}
    map {
      border: 1px solid #666;
      display: block;
    }
  `]
})

export class Facilities {
  @Input() facilities: Conference[];
  @Input() markers: Marker[];
  @Input() city: City;

}
