import { ActionTypes }      from './actions';
import { Action, State }    from './app-store';
import { FilterType, Todo } from '../model';

const initialState = {
  todos: [] as Todo[],
  currentFilter: 'SHOW_ALL' as FilterType
};

export function rootReducer(state = initialState, action: Action): State {
  switch (action.type) {

    case ActionTypes.ADD_TODO:
      return {
        todos: [...state.todos, action.payload as Todo],
        currentFilter: state.currentFilter
      };

    case ActionTypes.TOGGLE_TODO:
      return {
        todos: toggleTodo(state.todos, action.payload as number),
        currentFilter: state.currentFilter
      };

    case ActionTypes.REMOVE_TODO:
      const id = action.payload as number;
      return {
        todos: state.todos.filter(todo => todo.id !== id),
        currentFilter: state.currentFilter
      };

    case ActionTypes.SET_CURRENT_FILTER:
      return {
        todos: state.todos,
        currentFilter: action.payload as FilterType
      };

    default:
      return state;
  }
};

function toggleTodo(todos: Todo[], id: number) {
  return todos.map(todo => {
    return todo.id !== id ? todo :
      {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed
      };
  });
}
