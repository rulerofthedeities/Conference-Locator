import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MapService {
    private ccMarkerSelected = new Subject<number>();

    ccMarkerSelected$ = this.ccMarkerSelected.asObservable();

    newccMarker(index: number) {
      this.ccMarkerSelected.next(index);
    }
}
