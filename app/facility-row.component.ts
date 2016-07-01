import {Input, Component} from '@angular/core';
import {Conference} from './models/conference.model';
import {Hotels} from './hotels.component';

@Component({
  selector: 'facility-row',
  directives: [Hotels],
  template: `
    <li>
      <div>{{facility.name}} {{facility.location.getLongLat()}}</div>
      <hotels 
        *ngIf="isSelected"
        [facilityLocation]="facility.location">
      </hotels>
    </li>
  `,
    styles: [`
		li{
			cursor:pointer;
		}
    `]
})

export class FacilityRow {
	@Input() facility: Conference;
  @Input() isSelected: boolean;

}
