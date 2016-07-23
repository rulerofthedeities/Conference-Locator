import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'item',
	template: `
    <div class="media item">
      <div class="pull-left no">{{no}}.</div>
      <div class="media-left">
        <img src="{{img}}" class="media-object" alt="{{name}}">
      </div>
      <div class="media-body">
        <h5 class="media-heading">{{name}}</h5>
        <p><i>({{distance}}m)</i></p>
      </div>
    </div>
	`,
  styles: [`
    img {
      width: 60px;
      height: 60px;
      margin-left: 4px;
    }
    .item {
      margin-bottom: 2px;
      border: 1px solid white;
    }
    .media-body {
      padding-top: 5px;
    }
    .no {
      width: 20px;
      padding: 5px;
    }
    .item:hover {
      border: 1px dotted #c9515c;
      border-radius: 3px;
      cursor: pointer;
    }
  `]
})

export class Item implements OnInit {
	@Input() no: number;
  @Input() img: string;
  @Input() name: string;
  @Input() distance: number;

  ngOnInit() {
    this.distance = Math.round(this.distance / 10) * 10;
  }
}
