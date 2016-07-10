import {Component} from '@angular/core';
import {Tab} from './tab.component';

@Component({
  selector: 'tabs',
  template: `
  <ul class="nav nav-tabs">
    <li *ngFor="let tab of tabs;let num=index" (click)="selectTab(tab)" [class.active]="tab.active">
      <a href="#">{{tab.title}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
  `
})

export class Tabs {
  tabs:Tab[] = [];

  selectTab(tab: Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
