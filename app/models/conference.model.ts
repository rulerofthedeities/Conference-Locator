import {Site} from './site.model';

export class Conference extends Site {

	constructor(longitude: number, latitude: number) {
		super(longitude, latitude);
	}
}
