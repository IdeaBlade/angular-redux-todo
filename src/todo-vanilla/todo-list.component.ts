import { Component, OnInit } from '@angular/core';
import { FilterType, Todo }  from './model';
import { TodoService }       from './services';

@Component({
  selector: 'todo-list',
  template: `
    <div *ngFor="let todo of todos | visibleTodos:currentFilter">
      <button (click)="removeTodo(todo)">x</button>
      <todo [todo]="todo" (toggle)="onToggle(todo)"></todo>
    </div>
  `
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.todos = this.service.getTodos();
  }

  get currentFilter() {
    return this.service.getCurrentFilter();
  }

  onToggle(todo: Todo) { todo.completed = !todo.completed; }

  removeTodo(todo: Todo) {
    this.service.removeTodo(todo.id);
  }
}
