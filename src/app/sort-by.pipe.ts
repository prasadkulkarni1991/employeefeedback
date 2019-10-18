import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy',
    pure: true
})
export class OrderByPipe implements PipeTransform {

    transform(value: any[], propertyName: string): any {
        if (propertyName) {
            return value.sort((a: any, b: any) => b[propertyName].localeCompare(a[propertyName]));
        } else {
            return value;
        }
    }

}
