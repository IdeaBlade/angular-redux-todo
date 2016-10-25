import { createStore, Dispatch, Reducer, Store, Unsubscribe } from 'redux';
export { Unsubscribe } from 'redux';

import { rootReducer }      from './root-reducer';
import { FilterType, Todo } from '../model';

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  todos: Todo[];
  currentFilter: FilterType;
}

// Use this class as DI token
export abstract class AppStore implements Store<State> {
  abstract dispatch: Dispatch<State>;
  abstract getState(): State;
  abstract replaceReducer(nextReducer: Reducer<State>): void;
  abstract subscribe(listener: () => void): Unsubscribe;
}

// AoT wants a factory
export function appStoreFactory(): AppStore {
  return createStore(rootReducer);
}

export const appStoreProvider = { provide: AppStore, useFactory: appStoreFactory };
