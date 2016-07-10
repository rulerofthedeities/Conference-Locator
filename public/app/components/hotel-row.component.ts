import {Component, Input} from '@angular/core';
import {Hotel} from '../models/hotel.model';
import {Item} from './common/item.component';

@Component({
  selector: 'hotel-row',
  directives: [Item],
  template: `
    <li>
      <item (click)="selectHotel()"
        [no]="no"
        [img]="hotel.thumb"
        [name]="hotel.name"
        [distance]="hotel.distance">
      </item>
    </li>`
})

export class HotelRow {
  @Input() hotel: Hotel;
  @Input() no: number;
  isSelected: boolean = false;

  selectHotel() {
    this.isSelected = !this.isSelected;
  }
}

