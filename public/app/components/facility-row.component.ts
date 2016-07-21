import {Input, Component, OnDestroy} from '@angular/core';
import {Conference} from '../models/conference.model';
import {NearbyItems} from './nearby-items.component';
import {MapService} from '../services/map.service';
import {Subscription} from 'rxjs/Subscription';

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

export class FacilityRow implements OnDestroy {
  @Input() facility: Conference;
  @Input() i: number;
  isSelected: boolean = false;
  subscription: Subscription;

  constructor(mapService: MapService) {
    this.subscription = mapService.ccMarkerSelected$.subscribe(
      index => {
        this.markerSelected(index);
      }
    );
  }

  markerSelected(index: number) {
    this.isSelected = index === this.i;
  }

  selectFacility() {
    this.isSelected = !this.isSelected;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
