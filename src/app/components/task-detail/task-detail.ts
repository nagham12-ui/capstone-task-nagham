import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Task } from '../../task';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit {
  task?: Task;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.task = this.taskService.getTask(id);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveEdit() {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.isEditing = false;
    }
  }

  onDelete() {
    if (this.task) {
      this.taskService.deleteTask(this.task.id);
      this.router.navigate(['/']);
    }
  }
}