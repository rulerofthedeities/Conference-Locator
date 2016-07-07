import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../models/location.model';
import {Hotel} from '../models/hotel.model';
import {HotelService} from '../services/hotel.service';
import {HotelRow} from './hotel-row.component';
import {Subscription} from 'rxjs/Subscription';
import {LoadingIndicator} from './common/loading-indicator.component';

@Component({
	selector: 'hotels',
	providers: [HotelService],
	directives: [HotelRow, LoadingIndicator],
	template: `
    <div>
			hotels near location {{facilityLocation.getLongLat()}}
      <loading-indicator [isLoading]="loading"></loading-indicator>
			<ul>
				<hotel-row 
					*ngFor="let hotel of hotels"
					[hotel]="hotel">
				</hotel-row>
			</ul>
		</div>`
})

export class Hotels implements OnInit {
	@Input() facilityLocation: Location;
	hotels: Hotel[];
	selectedHotel: Hotel;
	selectedCity: string;
	subscription: Subscription;
	loading: boolean = false;

	constructor(private hotelService: HotelService) {}

	ngOnInit() {
		this.getHotels();
	}

	getHotels() {
		this.loading = true;
		this.hotelService.getNearbyHotels(this.facilityLocation).then(
			hotels => {
				this.hotels = hotels;
				this.loading = false;
			}
		);
	}

	isSelected(hotel: Hotel) {
		return (this.selectedHotel === hotel);
	}

}

