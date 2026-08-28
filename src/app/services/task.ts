import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
   private tasks: Task[] = [
    { id: 1, title: 'Study for Microprocessors Quiz', dueDate: '2026-08-30', completed: false, priority: 'High', category: 'University' },
    { id: 2, title: 'Submit Logic Design Lab Report', dueDate: '2026-08-25', completed: true, priority: 'Medium', category: 'Study' },
    { id: 3, title: 'Review Computer Networks Lecture', dueDate: '2026-09-02', completed: false, priority: 'High', category: 'University' },
    { id: 4, title: 'Practice C++ Data Structures Problems', dueDate: '2026-08-28', completed: false, priority: 'Medium', category: 'Coding' },
    { id: 5, title: 'Renew University Library Books', dueDate: '2026-06-05', completed: false, priority: 'Low', category: 'Personal' }
  ];
    getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updated: Task): void {
    this.tasks = this.tasks.map(t => (t.id === updated.id ? updated : t));
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
