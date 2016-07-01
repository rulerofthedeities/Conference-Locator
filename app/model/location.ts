export class Location {
  longitude: number;
  latitude: number;

  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  getLongLat(): string {
    return this.longitude + ', ' + this.latitude;
  }
}
