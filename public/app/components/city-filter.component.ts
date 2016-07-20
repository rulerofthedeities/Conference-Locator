import {Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from '../models/city.model';

@Component({
  'selector': 'city-filter',
  'template': `
    <div class="form-group form-group-lg">
      <select class="form-control"
          [(ngModel)]="currentCity"
          (ngModelChange)="onChange($event)">
          <option *ngFor="let city of cities" [value]="city.alias">{{city.name}}</option>
      </select>
    </div>
    `
})
export class CityFilter {
  @Input() cities: City[];
  @Output() selectedCity = new EventEmitter<string>();

  onChange(cityAlias: string) {
    this.selectedCity.emit(cityAlias);
  }

}