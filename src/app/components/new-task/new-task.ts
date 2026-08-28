import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Task } from '../../task';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  title = '';
  dueDate = '';
  priority: 'Low' | 'Medium' | 'High' = 'Medium';
  category = 'General';

  @Output() added = new EventEmitter<Task>();

  onSubmit() {
    if (this.title.trim()) {
      const newTask: Task = {
        id: Date.now(), 
        title: this.title.trim(),
        dueDate: this.dueDate || new Date().toISOString().split('T')[0],
        completed: false,
        priority: this.priority,
        category: this.category,
      };

      this.added.emit(newTask);

      this.title = '';
      this.dueDate = '';
      this.priority = 'Medium';
      this.category = 'General';
    }
  }
}