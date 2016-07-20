import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {NearbyItems} from './nearby-items.component';

@Component({
  selector: 'facility-row',
  directives: [NearbyItems],
  template: `
    <li [ngClass]="{active:isSelected}">
      <i 
        class="fa pull-left" 
        [ngClass]="{'fa-chevron-right':!isSelected,'fa-chevron-down':isSelected}">
      </i>
      
      <h4 (click)="selectFacility()">
        {{facility.name}}
      </h4>

      <nearby-items *ngIf="isSelected"
        [location]="facility.location">
      </nearby-items>

    </li>
  `,
  styles: [`
    li>h4 {cursor: pointer;}
    `]
})

export class FacilityRow {
  @Input() facility: Conference;
  isSelected: boolean = false;

  selectFacility() {
    this.isSelected = !this.isSelected;
  }
}
