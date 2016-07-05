import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../models/location.model';
import {Hotel} from '../models/hotel.model';
import {HotelService} from '../services/hotel.service';
import {HotelRow} from './hotel-row.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
	selector: 'hotels',
	providers: [HotelService],
	directives: [HotelRow],
	template: `<div>
				hotels near location {{facilityLocation.getLongLat()}}
				<ul>
					<hotel-row 
						*ngFor="let hotel of hotels"
						[hotel]="hotel">
					</hotel-row>
				</ul>
			</div>`,
    styles: [`
   		.selected {color: green;}
    `]
})

export class Hotels implements OnInit {
	@Input() facilityLocation: Location;
	hotels: Hotel[];
	selectedHotel: Hotel;
	selectedCity: string;
	subscription: Subscription;

	constructor(private hotelService: HotelService) {}

	ngOnInit() {
		this.getHotels();
	}

	getHotels() {
		this.hotelService.getNearbyHotels(this.facilityLocation).then(
			hotels => this.hotels = hotels
		);
	}

	isSelected(hotel: Hotel) {
		return (this.selectedHotel === hotel);
	}

}

