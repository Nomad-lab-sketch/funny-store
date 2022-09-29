import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty',
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): boolean {
    const typeValue = typeof value;
    let isEmpty: boolean = true;

    if (typeValue === 'object') {
      isEmpty = Object.keys(value).length == 0;
    }

    return isEmpty;
  }
}
