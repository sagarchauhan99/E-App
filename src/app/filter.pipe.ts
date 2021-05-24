import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], selected: string): any[] {
   if(!items) return [];
   if(!selected) return items;

   selected=items.values.name;

    return items.filter(data=>{
      return data.vala.includes(selected);
    });
  }

}
