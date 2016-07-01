import {Site} from './site.model';
export class Hotel extends Site {

	constructor(name: string, longitude: number, latitude: number) {
		super(name, longitude, latitude);
	}
}
