import {Pipe, PipeTransform} from '@angular/core';
import { Todo }       from './model';
import { FilterType } from './redux';

@Pipe({ name: 'visibleTodos' })
export class VisibleTodosPipe implements PipeTransform {
  transform(todos: Todo[], filter: FilterType) {
    if (!todos || todos.length === 0) { return; }
    return this.getVisibleTodos(todos, filter || 'SHOW_ALL');
  }

  private getVisibleTodos(todos: Todo[], filter: FilterType) {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ALL':
        return todos;
      default:
        return todos;
    }
  };
}
