import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../models/location.model';
import {Hotel} from '../models/hotel.model';
import {HotelService} from '../services/hotel.service';
import {HotelRow} from './hotel-row.component';

@Component({
	selector: 'hotels',
	providers: [HotelService],
	directives: [HotelRow],
	template: `<div>
				hotels near location {{facilityLocation.longitude}},{{facilityLocation.latitude}}
				<ul>
					<hotel-row 
						*ngFor="let hotel of hotels"
						[hotel]="hotel"
						[isSelected]="isSelected(hotel)"
						(click)="selectHotel(hotel)">
					</hotel-row>
				</ul>
			</div>`
})

export class Hotels {
	@Input() facilityLocation: Location;
	public hotels: Hotel[];
	selectedHotel: Hotel;

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

	selectHotel(hotel: Hotel) {
		this.selectedHotel = hotel;
	}

	isSelected(hotel: Hotel) {
		return (this.selectedHotel === hotel);
	}
}

