import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

const DEFAULTMESSAGE = 'Loading';

@Component({
  selector: 'km-loading-indicator',
  template: '<div *ngIf="isLoading">{{message$ | async}}</div>'
})

export class LoadingIndicatorComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input('message') userMessage: string;
  message$: Observable<string>;
  private message: string;
  private dots = ['', '.', '..', '...'];

  ngOnInit() {
    this.message = this.userMessage || DEFAULTMESSAGE;
    this.doDots();
  }

  doDots() {
    this.message$ = Observable.interval(500)
    .map(i => this.message + this.dots[i % this.dots.length]);
  }
}
