import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/model/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './todos/filter/filter.reducer';
import { filterStatusTodo } from './todos/filter/filter.actions';


export interface AppState {
    todos: Todo[],
    filter: filterStatusTodo
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}
