import {Component, Input} from '@angular/core';

@Component({
  selector: 'km-tab',
  template: `
    <div 
      [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})

export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() alias: string;
}
