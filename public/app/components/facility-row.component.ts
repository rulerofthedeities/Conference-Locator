import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {Hotels} from './hotels.component';

@Component({
  selector: 'facility-row',
  directives: [Hotels],
  template: `
    <li>
      <div (click)="selectFacility()">
        {{facility.name}}
      </div>
      <hotels 
        *ngIf="isSelected"
        [facilityLocation]="facility.location"
        [class.selected]="isSelected"
        >
      </hotels>
    </li>
  `,
  styles: [`
    li {cursor: pointer;}
    .selected {color: blue;}
    `]
})

export class FacilityRow {
  @Input() facility: Conference;
  isSelected: boolean = false;

  selectFacility() {
    this.isSelected = !this.isSelected;
  }
}
