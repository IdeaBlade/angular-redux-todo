import { FilterType } from '../model';

export const ActionTypes = {
  ADD_TODO:           'ADD_TODO',
  TOGGLE_TODO:        'TOGGLE_TODO',
  REMOVE_TODO:        'REMOVE_TODO',
  SET_CURRENT_FILTER: 'SET_CURRENT_FILTER',
};

/**
 * Action creators
 */
export class Actions {

  static nextToDoId = 1; // do better than this

  static addTodo(text: string) {
    return {
      type: ActionTypes.ADD_TODO,
      payload: {
        id: Actions.nextToDoId++,
        text: text,
        completed: false
      }
    };
  };

  static toggleTodo(id: number) {
    return {
      type: ActionTypes.TOGGLE_TODO,
      payload: id
    };
  };

  static removeTodo(id: number) {
    return {
      type: ActionTypes.REMOVE_TODO,
      payload: id
    };
  }

  static setCurrentFilter(filter: FilterType) {
    return {
      type: ActionTypes.SET_CURRENT_FILTER,
      payload: filter
    };
  };
}
