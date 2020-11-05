import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './model/todo.model';
import { filterStatusTodo } from './filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterStatusTodo): Todo[] {
    switch (filter) {
      case (filterStatusTodo.active):
        return todos.filter(todo => !todo.completed);
      case (filterStatusTodo.completed):
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

}
