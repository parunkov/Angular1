import { Pipe, PipeTransform } from '@angular/core';
import { IPrroduct } from '../models/prouct';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IPrroduct[], search: string): IPrroduct[] {
    if (search.length === 0) return products;
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
