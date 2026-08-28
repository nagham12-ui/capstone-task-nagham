import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Task } from '../../task';
import { DaysUntilDuePipe } from '../../pipes/days-until-due-pipe';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, DatePipe, RouterLink, DaysUntilDuePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem implements OnChanges {
  @Input() task!: Task;

  @Output() toggled = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('Task item changed:', this.task);
  }
}