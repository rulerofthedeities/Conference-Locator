import {Component, Input, OnInit} from '@angular/core';
import {Item} from './common/item.component';
import {Sight} from '../models/sight.model';

@Component({
  selector: 'sight-row',
  directives: [Item],
  template: `
    <li>
      <item
        [no]="no"
        [img]="imgsrc"
        [name]="sight.name"
        [distance]="sight.distance">
      </item>
    </li>`
})

export class SightRow implements OnInit {
  @Input() sight: Sight;
  @Input() no: number;
  imgsrc: string;

  ngOnInit() {
    this.imgsrc = 'http://www.aviewoncities.com/img/' + this.sight.cityAlias + '/' + this.sight.thumb + '.jpg';
  }
}
