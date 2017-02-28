import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TabService {
  private tabs = new Subject<string>();

  tabs$ = this.tabs.asObservable();

  setTab(tab: string) {
    this.tabs.next(tab);
  }
}
