import {Component, OnDestroy} from '@angular/core';
import { Todo } from './model';
import { Actions, AppStore, FilterType, Unsubscribe } from './redux';

@Component({
  selector: 'todo-list',
  template: `
    <div *ngFor="let todo of todos | visibleTodos:currentFilter">
      <button (click)="removeTodo(todo)">x</button>
      <todo [todo]="todo" (toggle)="onToggle($event)"></todo>
    </div>
  `
})
export class TodoListComponent implements OnDestroy {
  currentFilter: FilterType;
  todos: Todo[] = [];
  unsubscribe: Unsubscribe;

  constructor(private appStore: AppStore) {
    this.unsubscribe = appStore.subscribe(() => {
      let state = appStore.getState();
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
