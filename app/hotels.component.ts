import {Component, Input, OnInit} from '@angular/core';
import {Location} from './model/location';
import {Hotel} from './model/hotel';
import {HotelService} from './services/hotel.service';

@Component({
	selector: 'hotels',
	providers: [HotelService],
	template: `<div>
				hotels near location {{facilityLocation.longitude}},{{facilityLocation.latitude}}
				<ul>
					<li *ngFor="let hotel of hotels">{{hotel.name}}</li>
				</ul>
			</div>`
})

export class Hotels {
	@Input() facilityLocation: Location;
	public hotels: Hotel[];

	constructor(private hotelService: HotelService) {

	}

	ngOnInit() {
		this.getHotels();
	}

	getHotels() {
		this.hotelService.getNearbyHotels(this.facilityLocation).then(
			hotels => this.hotels = hotels
		);
	}
}

