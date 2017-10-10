import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './iproduct';
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], args?: string): IProduct[] {
    // alert('filter');
    return args ? value.filter(function (item) {
      if (item.productName.toLowerCase().indexOf(args) !== -1) {
        return value;
      }
    }) : value;
  }

}
