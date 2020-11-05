import { createReducer, on } from '@ngrx/store';
import { create, toggle, edit, deleteTodo, toggleAll, clear, clearCompleted } from './todo.actions';
import { Todo } from './model/todo.model';

export const initialState: Todo[] = [
    new Todo("Work"),
    new Todo("Learn JS"),
    new Todo("Learn Spring boot"),
    new Todo("Study Inglish"),
    new Todo("Watch movies"),
];


const _todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),

    on(toggle, (state, { id }) => state.map((todo: Todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        } else {
            return todo;
        }
    })
    ),
    on(edit, (state, { id, text }) =>
        state.map((todo: Todo) => {
            console.log(todo.id === id);
            console.log(todo.id, id);
            if (todo.id === id) {
                return {
                    ...todo,
                    text
                };
            } else {
                return todo;
            }
        })
    ),
    on(deleteTodo, (state, { id }) =>
        state.filter((todo: Todo) => todo.id !== id)),
    on(toggleAll, (state, { completed }) => state.map((todo: Todo) => {
        return { ...todo, completed };
    })),
    on(clearCompleted, (state) => state.filter(todo => !todo.completed )),
    on(clear, (state) => {
        return [];
    })
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}