import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centigrado'
})
export class CentigradoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + "ºC";
  }

}
