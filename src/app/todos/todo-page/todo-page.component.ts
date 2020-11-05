import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completeAll: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onToggleAll(): void {
    this.completeAll = !this.completeAll;
    this.store.dispatch(toggleAll({ completed: this.completeAll }));
  }
}
