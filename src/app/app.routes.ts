import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskDetail } from './components/task-detail/task-detail';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: TaskList },
  { path: 'tasks/:id', component: TaskDetail },
  { path: '**', component: NotFound },
];