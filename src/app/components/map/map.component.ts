import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Location} from '../../models/location.model';
import {Marker} from '../../models/map.model';
import {MapService} from '../../services/map.service';
import {TabService} from '../../services/tabs.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'km-map',
  template: `
  <agm-map 
    [longitude]="location.longitude"
    [latitude]="location.latitude"
    [zoom]="zoom">

    <km-map-markers *ngIf="showPins('hotels')"
      [markers]="hotelMarkers">
    </km-map-markers>

    <km-map-markers *ngIf="showPins('sights')"
      [markers]="sightMarkers">
    </km-map-markers>

    <agm-marker
      *ngFor="let m of ccMarkers; let i = index"
      (markerClick)="clickedMarker(m, i)"
      [longitude]="m.lon"
      [latitude]="m.lat"
      [label]="m.label"
      [markerDraggable]="false"
      [iconUrl]="m.icon">
      <agm-info-window *ngIf="showWindow">
          <p>{{title}}</p>
      </agm-info-window>
    </agm-marker>

  </agm-map>`,
  styles: [`
    agm-map {
      height: 600px;
    }
  `]
})

export class MapComponent implements OnInit, OnDestroy {
  @Input() location: Location;
  @Input('markers') ccMarkers: Marker[];
  hotelMarkers: Marker[];
  sightMarkers: Marker[];
  showWindow = false;
  showPinType = 'hotels';
  zoom = 11;
  subscriptions: Subscription[] = [];
  windowHeight: number;

  constructor(
    private mapService: MapService,
    private tabService: TabService) {
  }

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
    const redIcon = '../assets/img/icon-star-red.png';

    this.zoom = 11;
    this.ccMarkers
      .filter((marker) => marker.icon === redIcon)
      .forEach((marker) => marker.icon = '../assets/img/icon-star-blue.png');

    if (index !== null) {
      this.centerMap(index);
      this.ccMarkers[index].icon = redIcon;
    }
  }

  selectItemMarker(markers: Marker[], index: number) {
    const color = this.showPinType === 'hotels' ? 'blue' : 'green';
    const redIcon = '../assets/img/icon-pin-red.png';

    markers
      .filter(marker => marker.icon === redIcon)
      .forEach(marker => marker.icon = '../assets/img/icon-pin-' + color + '.png');
    markers[index].icon = redIcon;
  }

  centerMap(index: number) {
    const marker = this.ccMarkers[index];
    this.zoom = 13;
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
