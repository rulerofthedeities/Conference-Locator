import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {name: 'meter'}
)

export class MeterPipe implements PipeTransform {
  transform(value: number, digits: number): number {
    const multiplier: number = Math.pow(10, digits);
    return Math.round(value / multiplier) * multiplier;
  }
}
