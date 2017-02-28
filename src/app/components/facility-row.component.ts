import {Input, Component, OnDestroy} from '@angular/core';
import {Conference} from '../models/conference.model';
import {MapService} from '../services/map.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'km-facility-row',
  template: `
    <li [ngClass]="{active:isSelected}">
      <i 
        class="fa pull-left" 
        [ngClass]="{'fa-chevron-right':!isSelected,'fa-chevron-down':isSelected}">
      </i>
      <h4 (click)="selectFacility()">
        {{facility.name}}
      </h4>
      <km-nearby-items *ngIf="isSelected"
        [location]="facility.location">
      </km-nearby-items>
    </li>
  `,
  styles: [`
    li>h4 {cursor: pointer;}
  `]
})

export class FacilityRowComponent implements OnDestroy {
  @Input() facility: Conference;
  @Input() i: number;
  isSelected = false;
  subscription: Subscription;

  constructor(private mapService: MapService) {
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
    if (this.isSelected) {
      this.mapService.selectCcMarker(this.i);
    } else {
      this.mapService.setHotelMarkers(null);
      this.mapService.setSightMarkers(null);
      this.mapService.selectCcMarker(null);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
