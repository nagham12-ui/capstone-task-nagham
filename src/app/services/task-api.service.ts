import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
    
  private url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url).pipe(
      catchError((err) => {
        console.error('Failed to load tasks', err);
        return of([]);
      })
    );
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}