import {Component, Input, OnInit} from '@angular/core';
import {Sight} from '../models/sight.model';

@Component({
  selector: 'km-sight-row',
  template: `
    <li>
      <km-item
        [no]="no"
        [img]="imgsrc"
        [url]="sight.url">
        <strong class="media-heading">
          {{sight.name}}
        </strong>
        <p>
          <span class="address">{{sight.address}}</span>
          <i>({{sight.distance | meter:1}}m)</i>
        </p>
      </km-item>
    </li>`
})

export class SightRowComponent implements OnInit {
  @Input() sight: Sight;
  @Input() no: number;
  imgsrc: string;

  ngOnInit() {
    this.imgsrc = 'http://www.aviewoncities.com/img/' + this.sight.cityAlias + '/' + this.sight.thumb + '.jpg';
  }
}
