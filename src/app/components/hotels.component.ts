import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../models/location.model';
import {Hotel} from '../models/hotel.model';
import {Marker} from '../models/map.model';
import {HotelService} from '../services/hotel.service';
import {MapService} from '../services/map.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'km-hotels',
  template: `
    <div>
      <div *ngIf="!hasHotels">Sorry, no hotels found nearby</div>
      <km-loading-indicator 
        [isLoading]="loading"
        message="Loading hotels">
      </km-loading-indicator>
      <ul class="list-unstyled">
        <km-hotel-row 
          *ngFor="let hotel of hotels;let num=index"
          [hotel]="hotel"
          [no]="num+1"
          on-mouseenter="onMouseEnter(num)">
        </km-hotel-row>
      </ul>
    </div>`
})

export class HotelsComponent implements OnInit {
  @Input() facilityLocation: Location;
  hotels: Hotel[];
  selectedHotel: Hotel;
  selectedCity: string;
  subscription: Subscription;
  loading = false;
  hasHotels = true;
  markers: Marker[] = [];
  error: string;

  constructor(
    private hotelService: HotelService,
    private mapService: MapService
  ) {}

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.loading = true;
    this.hotelService
    .getNearbyHotels(this.facilityLocation)
    .subscribe(
      data => {
        if (data) {
          this.hotels = data['hotels'];
          this.addHotels(data['hotels']);
          this.createMarkers(data['hotels']);
          this.loading = false;
        }
      },
      error => this.error = error
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
        url: hotel.url,
        icon: '../assets/img/icon-pin-blue.png'});
    });
    this.mapService.setHotelMarkers(this.markers);
  }

  onMouseEnter(index: number) {
    this.mapService.selectHotelMarker(index);
  }

  private addHotels(hotels: Hotel[]) {
    hotels.forEach(
      hotel => {
        hotel.url = hotel.hotelId ?
        'http://travel.aviewoncities.com/templates/430701/hotels/' + hotel.hotelId + '/overview'
        : null;
      });
    this.hasHotels = hotels.length > 0;
    this.loading = false;
  }
}
