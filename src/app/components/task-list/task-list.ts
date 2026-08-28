import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task';
import { TaskService } from '../../services/task';
import { TaskStats } from '../task-stats/task-stats';
import { NewTask } from '../new-task/new-task';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, TaskStats, NewTask, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tasks: Task[] = [];
  searchTerm = '';
  sortBy: 'dueDate' | 'priority' = 'dueDate';
  hideCompleted = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  get filteredTasks() {
    return this.tasks
      .filter((t) =>
        t.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter((t) => (this.hideCompleted ? !t.completed : true))
      .sort((a, b) => (a[this.sortBy] < b[this.sortBy] ? -1 : 1));
  }

  onTaskAdded(newTask: Task) {
    this.taskService.addTask(newTask);
    this.tasks = [...this.taskService.getTasks()];
  }

  onTaskToggled(id: number) {
    const task = this.taskService.getTask(id);
    if (task) {
      task.completed = !task.completed;
      this.taskService.updateTask(task);
      this.tasks = [...this.taskService.getTasks()];
    }
  }

  onTaskDeleted(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = [...this.taskService.getTasks()];
  }

  toggleHideCompleted() {
    this.hideCompleted = !this.hideCompleted;
  }
}