export class Location {
  longitude: string;
  latitude: string;

  public getLongLat(): string {
    return this.longitude + ', ' + this.latitude;
  }
}
