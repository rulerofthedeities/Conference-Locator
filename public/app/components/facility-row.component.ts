import {Input, Component} from '@angular/core';
import {Conference} from '../models/conference.model';
import {Hotels} from './hotels.component';
import {Sights} from './sights.component';
import {Tabs} from './common/tabs.component';
import {Tab} from './common/tab.component';

@Component({
  selector: 'facility-row',
  directives: [Hotels, Sights, Tabs, Tab],
  template: `
    <li [ngClass]="{active:isSelected}">
      <i class="fa pull-left" [ngClass]="{'fa-chevron-right':!isSelected,'fa-chevron-down':isSelected}"></i>
      <h4 (click)="selectFacility()">
        {{facility.name}}
      </h4>

      <tabs *ngIf="isSelected">
        <tab tabTitle="Hotels nearby">
          <hotels 
            [facilityLocation]="facility.location"
            [class.selected]="isSelected"
            >
          </hotels>
        </tab>
        <tab tabTitle="Sights nearby">
          <sights 
            [hotelLocation]="facility.location"
            [class.selected]="isSelected"
            >
          </sights>
        </tab>
      </tabs>

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
