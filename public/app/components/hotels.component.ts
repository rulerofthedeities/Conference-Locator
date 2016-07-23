import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../models/location.model';
import {Hotel} from '../models/hotel.model';
import {Marker} from '../models/map.model';
import {HotelService} from '../services/hotel.service';
import {MapService} from '../services/map.service';
import {HotelRow} from './hotel-row.component';
import {Subscription} from 'rxjs/Subscription';
import {LoadingIndicator} from './common/loading-indicator.component';

@Component({
  selector: 'hotels',
  providers: [HotelService],
  directives: [HotelRow, LoadingIndicator],
  template: `
    <div>
      <div *ngIf="!hasHotels">Sorry, no hotels found nearby</div>
      <loading-indicator 
        [isLoading]="loading"
        message="Loading hotels">
      </loading-indicator>
      <ul class="list-unstyled">
        <hotel-row 
          *ngFor="let hotel of hotels;let num=index"
          [hotel]="hotel"
          [no]="num+1"
          on-mouseenter="onMouseEnter(num)">
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
  hasHotels: boolean = true;
  markers: Marker[] = [];

  constructor(
    private hotelService: HotelService,
    private mapService: MapService
  ) {}

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.loading = true;
    this.hotelService.getNearbyHotels(this.facilityLocation).then(
      hotels => {
        this.hotels = hotels;
        this.loading = false;
        this.hasHotels = hotels.length > 0;
        this.createMarkers(hotels);
      }
    );
  }

  isSelected(hotel: Hotel) {
    return (this.selectedHotel === hotel);
  }

  createMarkers(hotels: Hotel[]) {
    hotels.forEach(hotel => {
      this.markers.push({
        lat: hotel.location.latitude,
        lon: hotel.location.longitude,
        infotxt: hotel.name,
        icon: '../assets/img/icon-pin-blue.png',
        draggable: false});
    });
    this.mapService.setHotelMarkers(this.markers);
  }

  onMouseEnter(index: number) {
    this.mapService.selectHotelMarker(index);
  }
}
