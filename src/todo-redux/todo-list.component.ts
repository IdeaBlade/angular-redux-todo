import { Component, OnInit, OnDestroy }   from '@angular/core';
import { Actions, AppStore, Unsubscribe } from './redux';

import { FilterType, Todo } from './model';

@Component({
  selector: 'todo-list',
  template: `
    <div *ngFor="let todo of todos | visibleTodos:currentFilter">
      <button (click)="removeTodo(todo)">x</button>
      <todo [todo]="todo" (toggle)="onToggle($event)"></todo>
    </div>
  `
})
export class TodoListComponent implements OnInit, OnDestroy {
  currentFilter: FilterType;
  todos: Todo[] = [];
  unsubscribe: Unsubscribe;

  constructor(private appStore: AppStore) { }

  ngOnInit() {
    this.unsubscribe = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      this.currentFilter = state.currentFilter;
      this.todos = state.todos;
    });
  }

  onToggle(id: number) {
    this.appStore.dispatch(Actions.toggleTodo(id));
  }

  removeTodo(todo: Todo) {
    this.appStore.dispatch(Actions.removeTodo(todo.id));
  }

  ngOnDestroy() { this.unsubscribe(); }
}
