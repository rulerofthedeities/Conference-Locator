import {Component, Input} from '@angular/core';
import {Hotel} from '../models/hotel.model';
import {Sights} from './sights.component';
import {Item} from './common/item.component';

@Component({
  selector: 'hotel-row',
  directives: [Sights, Item],
  template: `
    <li>
      <item (click)="selectHotel()"
        [no]="no"
        [img]="hotel.thumb"
        [name]="hotel.name"
        [distance]="hotel.distance">
      </item>
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
  @Input() no: number;
  isSelected: boolean = false;

  selectHotel() {
    this.isSelected = !this.isSelected;
  }
}

