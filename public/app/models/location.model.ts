export class Location {
  longitude: number;
  latitude: number;

  public getLongLat(): string {
    return this.longitude + ', ' + this.latitude;
  }
}
