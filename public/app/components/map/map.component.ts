import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {Location} from '../../models/location.model';
import {Marker} from '../../models/map.model';
import {MapMarkers} from './map-markers.component';
import {MapService} from '../../services/map.service';
import {TabService} from '../../services/tabs.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'map',
  directives: [GOOGLE_MAPS_DIRECTIVES, MapMarkers],
  template: `
  <sebm-google-map 
    [longitude]="location.longitude"
    [latitude]="location.latitude"
    [zoom]="zoom">

    <map-markers *ngIf="showPins('hotels')"
      [markers]="hotelMarkers">
    </map-markers>

    <map-markers *ngIf="showPins('sights')"
      [markers]="sightMarkers">
    </map-markers>

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
      height: 600px;
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
  subscriptions: Subscription[] = [];

  constructor(
    private mapService: MapService,
    private tabService: TabService) {}

  ngOnInit() {
    this.subscriptions.push(this.mapService.hotelMarkers$.subscribe(
      hotels => this.hotelMarkers = hotels
    ));
    this.subscriptions.push(this.mapService.sightMarkers$.subscribe(
      sights => this.sightMarkers = sights
    ));
    this.subscriptions.push(this.mapService.ccMarkerSelected$.subscribe(
      index => this.selectCcMarker(index)
    ));
    this.subscriptions.push(this.mapService.sightMarkerSelected$.subscribe(
      index => this.selectItemMarker(this.sightMarkers, index)
    ));
    this.subscriptions.push(this.mapService.hotelMarkerSelected$.subscribe(
      index => this.selectItemMarker(this.hotelMarkers, index)
    ));
    this.subscriptions.push(this.tabService.tabs$.subscribe(
      tab => this.showPinType = tab
    ));
  }

  clickedMarker(marker: Marker, index: number) {
    this.selectCcMarker(index);
    this.mapService.selectCcMarker(index);
  }

  selectCcMarker(index: number) {
    this.ccMarkers.forEach((marker) => {
      if (marker.icon === '../assets/img/icon-star-red.png') {
        marker.icon = '../assets/img/icon-star-blue.png';
      }});
    if (index !== null) {
      this.centerMap(index);
      this.ccMarkers[index].icon = '../assets/img/icon-star-red.png';
    }
  }

  selectItemMarker(markers: Marker[], index: number) {
    let color = this.showPinType === 'hotels' ? 'blue' : 'green';
    markers.forEach((marker) => {
      if (marker.icon === '../assets/img/icon-pin-red.png') {
        marker.icon = '../assets/img/icon-pin-' + color + '.png';
      }});
    markers[index].icon = '../assets/img/icon-pin-red.png';
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
    this.subscriptions.forEach(
      subscription => subscription.unsubscribe());
  }

}
