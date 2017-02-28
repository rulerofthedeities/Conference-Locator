import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabComponent} from './tab.component';
import {TabService} from '../../services/tabs.service';

@Component({
  selector: 'km-tabs',
  template: `
  <ul class="nav nav-tabs">
    <li 
      *ngFor="let tab of tabs;let num=index" 
      (click)="selectTab(tab)" 
      [class.active]="tab.active">
      <a href="#">{{tab.title}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
  `
})

export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor(private tabService: TabService) {}

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach( tabItem => tabItem.active = false);
    tab.active = true;
    this.tabService.setTab(tab.alias);
  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
}
