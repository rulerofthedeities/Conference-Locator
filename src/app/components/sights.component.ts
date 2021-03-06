import {Component, Input, OnInit} from '@angular/core';
import {SightService} from '../services/sight.service';
import {Location} from '../models/location.model';
import {Marker} from '../models/map.model';
import {Sight} from '../models/sight.model';
import {MapService} from '../services/map.service';

@Component({
  selector: 'km-sights',
  template: `
    <div *ngIf="!hasSights">Sorry, no sights found nearby</div>
    <km-loading-indicator 
      [isLoading]="loading"
      message="Loading sights">
    </km-loading-indicator>
    <ul class="list-unstyled">
      <km-sight-row
        *ngFor="let sight of sights;let num=index"
        [sight]="sight"
        [no]="num+1"
        on-mouseenter="onMouseEnter(num)">
      </km-sight-row>
    </ul>`
})

export class SightsComponent implements OnInit {
  @Input() hotelLocation: Location;
  sights: Sight[];
  loading = false;
  hasSights = true;
  markers: Marker[] = [];
  error: string;

  constructor(
    private sightService: SightService,
    private mapService: MapService) {}

  ngOnInit() {
    this.getSights();
  }

  getSights() {
    this.loading = true;
    this.sightService
    .getNearbySights(this.hotelLocation)
    .subscribe(
      data => {
        this.sights = data['sights'];
        let domain = 'http://www.aviewoncities.com/';
        this.sights.forEach(sight => {
          sight.url = sight.published ? domain + sight.cityAlias + '/' + sight.alias + '.htm' : null;
        });
        this.loading = false;
        this.hasSights = this.sights.length > 0;
        this.createMarkers(this.sights);
      },
      error => this.error = error
    );
  }

  createMarkers(sights: Sight[]) {
    sights.forEach(sight => {
      this.markers.push({
        lat: sight.location.latitude,
        lon: sight.location.longitude,
        infotxt: sight.name,
        url: sight.url,
        icon: '../assets/img/icon-pin-green.png'});
    });
    this.mapService.setSightMarkers(this.markers);
  }

  onMouseEnter(index: number) {
    this.mapService.selectSightMarker(index);
  }
}
