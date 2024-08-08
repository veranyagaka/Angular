import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    standalone: true,
    name: 'star',
})
export class StarPipe implements PipeTransform {
    transform(value: string): string {
        return '⭐️' + value + '⭐️';
        }
}