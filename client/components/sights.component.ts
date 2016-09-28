import {Component, Input, OnInit} from '@angular/core';
import {SightService} from '../services/sight.service';
import {Location} from '../models/location.model';
import {Marker} from '../models/map.model';
import {Sight} from '../models/sight.model';
import {MapService} from '../services/map.service';

@Component({
  selector: 'sights',
  template: `
    <div *ngIf="!hasSights">Sorry, no sights found nearby</div>
    <loading-indicator 
      [isLoading]="loading"
      message="Loading sights">
    </loading-indicator>
    <ul class="list-unstyled">
      <sight-row
        *ngFor="let sight of sights;let num=index"
        [sight]="sight"
        [no]="num+1"
        on-mouseenter="onMouseEnter(num)">
      </sight-row>
    </ul>`
})

export class Sights implements OnInit {
  @Input() hotelLocation: Location;
  sights: Sight[];
  loading: boolean = false;
  hasSights: boolean = true;
  markers: Marker[] = [];

  constructor(
    private sightService: SightService,
    private mapService: MapService) {}

  ngOnInit() {
    this.getSights();
  }

  getSights() {
    this.loading = true;
    this.sightService.getNearbySights(this.hotelLocation).then(
      sights => {
        this.sights = sights;
        this.sights.forEach(sight => {
            sight.url = sight.published ? sight.url = 'http://www.aviewoncities.com/' + sight.cityAlias + '/' + sight.alias + '.htm' : null;
        });
        this.loading = false;
        this.hasSights = sights.length > 0;
        this.createMarkers(sights);
      }
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
