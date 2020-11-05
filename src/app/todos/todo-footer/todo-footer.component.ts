import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filterStatusTodo, filterStatus } from '../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: filterStatusTodo = filterStatusTodo.all;
  filters: filterStatusTodo[] =  [filterStatusTodo.all, filterStatusTodo.active, filterStatusTodo.completed];
  countActives: number = 0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter =>this.actualFilter = filter);
    this.store.subscribe(state => {
        this.actualFilter = state.filter;
        this.countActives = state.todos.filter((todo) => !todo.completed).length;
      });

  }
  onSelectFilter(filter: filterStatusTodo): void {
    console.log(filter);
    this.store.dispatch(filterStatus({status: filter}));
  }

  onClearCompleted(): void  {
    this.store.dispatch(clearCompleted());
  }
}
