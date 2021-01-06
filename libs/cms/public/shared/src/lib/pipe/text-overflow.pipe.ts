import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textOverflow'
})
export class TextOverflowPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (!value) return '';
    let result: string = value;
    if (limit == -1) return result;
    if (value.length > limit) {
      result = value.slice(0, limit) + '...';
    }
    return result;
  }
}
