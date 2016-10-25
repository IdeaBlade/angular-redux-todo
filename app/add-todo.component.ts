import { Component } from '@angular/core';
import { Actions, AppStore } from './redux';

@Component({
  selector: 'add-todo',
  template:
    `<div>
      <input [(ngModel)]="text" (keyup.enter)="addTodo()">
      <button (click)="addTodo()">Add todo</button>
    </div>`
})
export class AddTodoComponent {
  text = '';

  constructor(private appStore: AppStore) { }

  addTodo() {
    const text = this.text.trim();
    if (text) {
      this.appStore.dispatch(Actions.addTodo(text));
      this.text = '';
    }
  }
}
