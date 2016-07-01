import {Component, Input} from '@angular/core';
import {Hotel} from './models/hotel.model';
import {Sights} from './sights.component';

@Component({
	selector: 'hotel-row',
	directives: [Sights],
	template: `<li>
				<div>{{hotel.name}}</div>
				<sights 
					*ngIf="isSelected"
					[hotelLocation]="hotel.location">
				</sights>
				{{hotel.location.longitude}}
				</li>`
})

export class HotelRow {
	@Input() hotel: Hotel;
	@Input() isSelected: boolean;
}

