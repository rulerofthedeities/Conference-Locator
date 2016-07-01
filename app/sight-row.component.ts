import {Component, Input} from '@angular/core';
import {Sight} from './models/sight.model';

@Component({
	'selector': 'sight-row',
	'template': `<li>{{sight.name}}</li>`
})

export class SightRow {
	@Input() sight:Sight;
}
