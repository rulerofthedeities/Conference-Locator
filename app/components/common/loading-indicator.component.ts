import {Component, Input} from '@angular/core';

@Component({
  selector: 'loading-indicator',
  template: '<div *ngIf="isLoading">Loading...</div>'
})

export class LoadingIndicator {
  @Input() isLoading: boolean;

}
