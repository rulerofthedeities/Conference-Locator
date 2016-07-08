import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {FacilityRow} from './facility-row.component';

@Component({
  selector: 'conference-list',
  directives: [FacilityRow],
  template: `
  <ul>
    <facility-row 
      [facility]="facility" 
      *ngFor="let facility of facilities">
    </facility-row>
  </ul>
  <div *ngIf="selectedFacility">
  	{{selectedFacility.name}}
  </div>
   `
})

export class Facilities {
	@Input() facilities: Conference[];
	selectedFacility: Conference;


	onSelect(facility: Conference): void {
		this.selectedFacility = facility;
	}

	isSelected(facility: Conference): boolean {
		return facility === this.selectedFacility;
	}

}
