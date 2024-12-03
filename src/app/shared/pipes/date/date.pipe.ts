import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    const date = new Date(value);
    const formattedDate = date.toLocaleDateString('pt-BR');
    const formattedTime = date.toLocaleTimeString('pt-BR');
    const formattedDateTime = `${formattedDate} as ${formattedTime}`;
    return formattedDateTime;
  }
}
