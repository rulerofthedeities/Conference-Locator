import {Component, Input, OnInit} from '@angular/core';
import {SightService} from '../services/sight.service';
import {Location} from '../models/location.model';
import {Sight} from '../models/sight.model';
import {SightRow} from './sight-row.component';
import {LoadingIndicator} from './common/loading-indicator.component';

@Component({
  'selector': 'sights',
  'providers': [SightService],
  'directives': [SightRow, LoadingIndicator],
  'template': `
    <div>Sights near {{hotelLocation.getLongLat()}}</div>
    <loading-indicator 
      [isLoading]="loading"
      message="Loading sights..."
    ></loading-indicator>
    <ul>
      <sight-row
        *ngFor="let sight of sights"
        [sight]="sight"
      >
      </sight-row>
    </ul>`
})

export class Sights implements OnInit {
  @Input() hotelLocation: Location;
  sights: Sight[];
  loading: boolean = false;

  constructor(private sightService: SightService) {}

  ngOnInit() {
    this.getSights();
  }

  getSights() {
    this.loading = true;
    this.sightService.getNearbySights(this.hotelLocation).then(
      sights => {
        this.sights = sights;
        this.loading = false;
      }
    );
  }
}
