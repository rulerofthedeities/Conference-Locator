import {Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from '../models/city.model';

@Component({
  'selector': 'city-filter',
  'template': `
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
export class CityFilter {
  @Input() cities: City[];
  @Output() selectedCity = new EventEmitter<City>();

  onChange(city: City) {
    this.selectedCity.emit(city);
  }

}
