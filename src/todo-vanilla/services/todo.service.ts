import { Injectable } from '@angular/core';
import { FilterType, Todo } from '../model';

export class State {
  todos: Todo[] = [];
  currentFilter: FilterType = 'SHOW_ALL';
}

@Injectable()
export class TodoService {

  static nextToDoId = 1; // do better than this

  private state = new State();

  getTodos() { return this.state.todos; }
  getCurrentFilter() { return this.state.currentFilter; }

  addTodo(todo: Todo) {
    todo.id = TodoService.nextToDoId++;
    this.state.todos.push(todo);
  }

  removeTodo(id: number) {
    const ix = this.state.todos.findIndex(todo => todo.id === id);
    if (ix !== undefined) { this.state.todos.splice(ix, 1); }
  }

  setCurrentFilter(filter: FilterType) {
    this.state.currentFilter = filter;
  }
}
