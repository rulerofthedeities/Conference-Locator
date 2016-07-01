import {Component, Input} from '@angular/core';
import {Location} from './model/location';

@Component({
	selector: 'hotels',
	template: `<div>hotels near location {{facilityLocation.longitude}},{{facilityLocation.latitude}}</div>`
})

export class Hotels {
	@Input() facilityLocation: Location;
}

