import { filterStatusTodo, filterStatus } from './filter.actions';
import { createReducer, on } from '@ngrx/store';


export const initialState: filterStatusTodo = filterStatusTodo.all;

const _filterReducer = createReducer(
    initialState,
    on(filterStatus, (state, { status }) => {
        return status;
    }));

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}
