import {Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from './models/city.model';

@Component({
	'selector': 'city-filter',
	'template': `<div>City Selector</div>
				      <select
                  [(ngModel)]="currentCity"
                  (ngModelChange)="onChange($event)">
                  <option *ngFor="let city of cities" [value]="city.alias">{{city.name}}</option>
              </select>
              {{defaultCity}}
				      `
})
export class CityFilter {
	@Input() cities: City[];
  @Input('defaultCity') currentCity: string;
  @Output() selectedCity = new EventEmitter<string>();

  onChange(cityAlias: string) {
    this.selectedCity.emit(cityAlias);
  }

}
