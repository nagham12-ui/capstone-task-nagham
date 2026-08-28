import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysUntilDue',
})
export class DaysUntilDuePipe implements PipeTransform {
  transform(dueDate: string): string {
    const days = Math.ceil(
      (new Date(dueDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    );
    if (days < 0) return `Overdue by ${-days} days`;
    if (days === 0) return 'Due today';
    return `Due in ${days} days`;
  }
}
