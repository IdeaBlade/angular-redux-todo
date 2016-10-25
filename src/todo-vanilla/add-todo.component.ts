import { Component }   from '@angular/core';
import { Todo }        from './model';
import { TodoService } from './services';

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

  constructor(private service: TodoService) { }

  addTodo() {
    const text = this.text.trim();
    if (text) {
      const todo = new Todo();
      todo.text = text;
      this.service.addTodo(todo);
      this.text = '';
    }
  }
}
