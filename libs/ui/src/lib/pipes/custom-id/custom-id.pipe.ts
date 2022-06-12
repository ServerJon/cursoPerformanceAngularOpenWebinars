import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customId'
})
export class CustomIdPipe implements PipeTransform {

  transform(value: string): string {

    if (value.length == 0)
      return '-';

    return value;
  }

}
