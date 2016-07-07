import {Component, Input} from '@angular/core';

const DEFAULTMESSAGE = 'Loading...';
@Component({
  selector: 'loading-indicator',
  template: '<div *ngIf="isLoading">{{message}}</div>'
})

export class LoadingIndicator {
  @Input() isLoading: boolean;
  @Input() message: string;

  constructor() {
    this.message = this.message || DEFAULTMESSAGE;
  }
}
