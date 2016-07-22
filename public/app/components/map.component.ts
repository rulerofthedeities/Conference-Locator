import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {Location} from '../models/location.model';
import {Marker} from '../models/map.model';
import {MapService} from '../services/map.service';
import {TabService} from '../services/tabs.service';
import {Subscription} from 'rxjs/Subscription';

interface Assoc<Subscription> {
    [K: string]: Subscription;
}

@Component({
  selector: 'map',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  template: `
  <sebm-google-map 
    [longitude]="location.longitude"
    [latitude]="location.latitude"
    [zoom]="zoom">

    <div *ngIf="showPins('hotels')">
      <sebm-google-map-marker
        *ngFor="let m of hotelMarkers; let i = index"
        [longitude]="m.lon"
        [latitude]="m.lat"
        [label]="m.label"
        [markerDraggable]="m.draggable"
        [iconUrl]="m.icon">
        <sebm-google-map-info-window>
            <p>{{m.infotxt}}</p>
        </sebm-google-map-info-window>
      </sebm-google-map-marker>
    </div>

    <div *ngIf="showPins('sights')">
      <sebm-google-map-marker
        *ngFor="let m of sightMarkers; let i = index"
        [longitude]="m.lon"
        [latitude]="m.lat"
        [label]="m.label"
        [markerDraggable]="m.draggable"
        [iconUrl]="m.icon">
        <sebm-google-map-info-window>
            <p>{{m.infotxt}}</p>
        </sebm-google-map-info-window>
      </sebm-google-map-marker>
    </div>

    <sebm-google-map-marker 
      *ngFor="let m of ccMarkers; let i = index"
      (markerClick)="clickedMarker(m, i)"
      [longitude]="m.lon"
      [latitude]="m.lat"
      [label]="m.label"
      [markerDraggable]="m.draggable"
      [iconUrl]="m.icon">
      <sebm-google-map-info-window *ngIf="showWindow">
          <p>{{m.infotxt}}</p>
      </sebm-google-map-info-window>
    </sebm-google-map-marker>


  </sebm-google-map>`,
  styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
`]
})

export class Map implements OnInit, OnDestroy {
  @Input() location: Location;
  @Input('markers') ccMarkers: Marker[];
  hotelMarkers: Marker[];
  sightMarkers: Marker[];
  showWindow: boolean = false;
  showPinType: string = 'hotels';
  zoom: number = 11;
  subscriptions: Assoc<Subscription> = {};

  constructor(
    private mapService: MapService,
    private tabService: TabService) {}

  ngOnInit() {
    this.subscriptions['hotels'] = this.mapService.hotelMarkers$.subscribe(
      hotels => {this.hotelMarkers = hotels;}
    );
    this.subscriptions['sights'] = this.mapService.sightMarkers$.subscribe(
      sights => {console.log('getting new sights', sights);
      this.sightMarkers = sights;}
    );
    this.subscriptions['ccmarker'] = this.mapService.ccMarkerSelected$.subscribe(
      index => {this.selectMarker(index);}
    );
    this.subscriptions['tabs'] = this.tabService.tabs$.subscribe(
      tab => {this.showPinType = tab;}
    );
  }

  clickedMarker(marker: Marker, index: number) {
    this.selectMarker(index);
    this.mapService.selectCcMarker(index);
  }

  selectMarker(index: number) {
    this.centerMap(index);
    this.ccMarkers.forEach((marker) => {
      if (marker.icon === '../assets/img/icon-star-red.png') {
        marker.icon = '../assets/img/icon-star-blue.png';
      }});
    this.ccMarkers[index].icon = '../assets/img/icon-star-red.png';
  }

  centerMap(index: number) {
    let marker = this.ccMarkers[index];
    this.location.longitude = marker.lon;
    this.location.latitude = marker.lat;
  }

  showPins(tab: string) {
    return tab === this.showPinType;
  }

  ngOnDestroy() {
    for (var key in this.subscriptions) {
      this.subscriptions[key].unsubscribe();
    }
  }

}
