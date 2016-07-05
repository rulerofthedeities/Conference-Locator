import {Component, Input} from '@angular/core';
import {Hotel} from '../models/hotel.model';
import {Sights} from './sights.component';

@Component({
	selector: 'hotel-row',
	directives: [Sights],
	template: `<li>
				<div (click)="selectHotel()">
          {{hotel.name}}
        </div>
				<sights 
					*ngIf="isSelected"
					[hotelLocation]="hotel.location"
          [class.selected]="isSelected"
					>
				</sights>
				</li>`,
  styles: [`
     .selected {color: green;}
  `]
})

export class HotelRow {
	@Input() hotel: Hotel;
  isSelected: boolean = false;

  selectHotel() {
    this.isSelected = !this.isSelected;
  }

}

