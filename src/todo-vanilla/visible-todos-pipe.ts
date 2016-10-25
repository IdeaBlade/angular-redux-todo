import { Pipe, PipeTransform } from '@angular/core';
import { FilterType, Todo }    from './model';

/**
 * Impure pipe called insanely often
 * Must be impure because imputs are mutable.
 * Will have to do something different if this becomes a perf killer
 * But it isn't now and won't be for a long time.
 * Measure perf before acting!
 */
@Pipe({
  name: 'visibleTodos',
  pure: false
})
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
