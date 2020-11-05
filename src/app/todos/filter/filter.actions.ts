import { createAction, props } from '@ngrx/store';

export enum filterStatusTodo {
    all = 'all',
    completed = 'completed',
    active = 'active'
}

export const filterStatus = createAction(
    '[TODO-filter] status',
    props<{ status: filterStatusTodo }>()
);

export const filterText = createAction(
    '[TODO-filter] text',
    props<{ text: string }>()
);

