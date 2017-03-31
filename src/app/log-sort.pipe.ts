import { Pipe, PipeTransform } from '@angular/core';
import { Log } from './models/log.model';

@Pipe({
  name: 'logSort'
})
export class LogSortPipe implements PipeTransform {

  transform(input: Log[], sortType: string) {
    const output: Log[] = [];
    if (sortType === 'low-cal') {
      input.forEach(log => {
        if (log.calories <= 500) {
          output.push(log);
        }
      });
      return output;
    } else if (sortType === 'hi-cal') {
      input.forEach(log => {
        if (log.calories > 500) {
          output.push(log);
        }
      });
      return output;
    } else {
      return input;
    }
  }

}
