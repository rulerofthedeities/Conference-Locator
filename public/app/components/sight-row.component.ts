import {Component, Input, OnInit} from '@angular/core';
import {Sight} from '../models/sight.model';

@Component({
  'selector': 'sight-row',
  'template': `<li>{{sight.name}} ({{distance}}m)</li>`
})

export class SightRow implements OnInit {
  @Input() sight:Sight;
  distance: number;

  ngOnInit() {
    this.distance = Math.round(this.sight.distance/10)*10;
  }
}
