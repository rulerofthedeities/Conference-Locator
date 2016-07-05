import {Component, Input, OnInit} from '@angular/core';
import {SightService} from '../services/sight.service';
import {Location} from '../models/location.model';
import {Sight} from '../models/sight.model';
import {SightRow} from './sight-row.component';

@Component({
	'selector': 'sights',
	'providers': [SightService],
	'directives': [SightRow],
	'template': `<div>Sights near {{hotelLocation.getLongLat()}}</div>
				<ul>
				<sight-row
					*ngFor="let sight of sights"
					[sight]="sight"
				>
				</sight-row>
				</ul>
        `
})

export class Sights implements OnInit {
	@Input() hotelLocation: Location;
	sights: Sight[];

	constructor(private sightService: SightService) {}

	ngOnInit() {
		this.getSights();
	}

	getSights() {
		this.sightService.getNearbySights(this.hotelLocation).then(
			sights => this.sights = sights
		);
	}

}
