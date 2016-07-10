import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {Hotels} from './hotels.component';

@Component({
  selector: 'facility-row',
  directives: [Hotels],
  template: `
    <li [ngClass]="{active:isSelected}">
      <i class="fa pull-left" [ngClass]="{'fa-chevron-right':!isSelected,'fa-chevron-down':isSelected}"></i>
      <h4 (click)="selectFacility()">
        {{facility.name}}
      </h4>
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
