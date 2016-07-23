import {Component, Input} from '@angular/core';

@Component({
	selector: 'item',
	template: `
    <div class="media item" [ngClass]="{'link':url}" (click)="externalLink()">
      <div class="pull-left no">
        {{no}}.
      </div>
      <div class="media-left">
        <img src="{{img}}" class="media-object" alt="{{name}}">
      </div>
      <div class="media-body">
        <ng-content></ng-content>
      </div>
    </div>
	`,
  styleUrls: ['app/components/common/item.component.css']
})

export class Item {
	@Input() no: number;
  @Input() img: string;
  @Input() url: string;

  externalLink() {
    if (this.url) {
      window.open(this.url, '_blank');
    }
  }
}
