import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtSummary'
})
export class TxtSummaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value)
      return '';

    const limit = args || 10;
    return (value.length <= limit) ? value : value.substr(0, limit) + '...';
  }
}
