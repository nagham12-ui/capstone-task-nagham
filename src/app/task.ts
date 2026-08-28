export interface Task {
  id: number;
  title: string;
  dueDate: string;
  completed: boolean;
  priority: 'Low' | 'Medium' | 'High';
  category: string;
}