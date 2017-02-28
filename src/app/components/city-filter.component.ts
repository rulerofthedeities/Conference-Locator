import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {CityService} from '../services/city.service';
import {City} from '../models/city.model';

@Component({
  selector: 'km-city-filter',
  template: `
    <div class="form-group form-group-lg">
      <select class="form-control"
        [ngModel]="currentCity"
        (ngModelChange)="onChange($event)">
        <option 
          *ngFor="let city of cities" 
          [ngValue]="city">
          {{city.name}}
        </option>
      </select>
    </div>
    `
})
export class CityFilterComponent implements OnInit {
  @Output() selectedCity = new EventEmitter<City>();
  cities: City[];
  currentCity: City;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService.getCities().then(
      cities => {
        this.cities = cities;
        // Select default city
        this.selectedCity.emit(cities[cities.length - 1]);
        this.currentCity = cities[cities.length - 1];
      }
    );
  }

  onChange(city: City) {
    this.selectedCity.emit(city);
  }
}
