import { Component, Input, OnChanges } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-stats',
  imports: [],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.css',
})
export class TaskStats implements OnChanges {
    @Input() tasks: Task[] = [];

  total = 0;
  completedCount = 0;
  overdueCount = 0;

  ngOnChanges() {
    this.total = this.tasks.length;
    this.completedCount = this.tasks.filter((t) => t.completed).length;
    this.overdueCount = this.tasks.filter(
      (t) => !t.completed && new Date(t.dueDate) < new Date()
    ).length;
  }
}
