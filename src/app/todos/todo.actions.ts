import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] create',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] toggle',
    props<{id: number}>()
);

export const edit = createAction(
    '[TODO] edit',
    props<{id: number, text: string}>()
);

export const deleteTodo = createAction(
    '[TODO] delete',
    props<{ id: number}>()
);

export const toggleAll = createAction(
    '[TODO] toggleAll',
    props<{ completed: boolean}>()
);

export const clear = createAction(
    '[TODO] clear'
);

export const clearCompleted = createAction(
    '[TODO] clearCompleted'
);