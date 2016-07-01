import {Component, Input} from '@angular/core';
import {Hotel} from './model/hotel';

@Component({
	selector: 'hotel-row',
	template: `<div>hotel</div>`
})

export class HotelRow {
	@Input() hotel: Hotel;
}

