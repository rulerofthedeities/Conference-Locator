import {Component, Input, OnInit} from '@angular/core';
import {Tabs} from './tabs.component';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})

export class Tab implements OnInit {
  @Input('tabTitle') title: string;
  @Input() active: boolean;

  constructor(tabs: Tabs) {
    tabs.addTab(this);
  }

  ngOnInit() {
    this.active = this.active || false;
  }

}
