import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'todo',
  template: `
    <span (click)="onClick()"
      [style.textDecoration]="todo.completed ? 'line-through' : 'none'">
      {{todo.text}}
    </span> 
  `
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() toggle = new EventEmitter<number>();

  onClick() {
    this.toggle.emit(this.todo.id);
  }
}
