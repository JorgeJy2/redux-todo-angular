import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todo: FormControl;

  constructor(private store: Store<AppState>) {
    this.todo  = new FormControl('', [Validators.required]);
   }

  ngOnInit(): void {
  }

  onAdd(): void {
    if ( this.todo.invalid ){
      return;
    }

    console.log(this.todo.value);
    this.store.dispatch(actions.create({ text: this.todo.value}));

    this.todo.reset();
  }
}
