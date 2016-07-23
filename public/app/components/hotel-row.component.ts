import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../models/hotel.model';
import {Item} from './common/item.component';
import {MeterPipe} from '../pipes/meters.pipe';

@Component({
  selector: 'hotel-row',
  directives: [Item],
  pipes: [MeterPipe],
  template: `
    <li>
      <item (click)="selectHotel()"
        [no]="no"
        [img]="hotel.thumb"
        [url]="url">
        <strong class="media-heading">
          {{hotel.name}}
        </strong> 
        <span *ngIf="hasStars()"><i *ngFor="let s of arr" class="fa fa-star"></i></span>
        <p>
          <span class="address">{{hotel.address}}</span>
          <i>({{hotel.distance | meter:1}}m)</i>
        </p>
      </item>
    </li>`,
    styles: [`
      .fa-star {color: red;}
    `]
})

export class HotelRow implements OnInit {
  @Input() hotel: Hotel;
  @Input() no: number;
  isSelected: boolean = false;
  arr: Array<number>;
  url: string;

  ngOnInit() {
    if (this.hasStars()) {
      this.arr = new Array(parseInt(this.hotel.stars, 10));
    }
    if (this.hotel.hotelId) {
      this.url = 'http://travel.aviewoncities.com/templates/430701/hotels/' + this.hotel.hotelId + '/overview';
    }
  }

  selectHotel() {
    this.isSelected = !this.isSelected;
  }

  hasStars() {
    return this.hotel.stars !== '';
  }
}

