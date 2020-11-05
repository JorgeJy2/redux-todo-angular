import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';
import { deleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  checkComplete: FormControl;
  text: FormControl;

  editing: boolean = false;

  @ViewChild('inputText')
  inputText: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.todo.completed = true;
    // console.log(object)
    this.checkComplete = new FormControl(this.todo.completed);
    this.text = new FormControl(this.todo.text, [Validators.required]);


    this.checkComplete.valueChanges.subscribe(check => {
      console.log(check);
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  onEdit(): void {
    this.editing = true;
    setTimeout(() => {
      this.inputText.nativeElement.select();
    }, 1);
  }

  onExitText(): void {
    this.editing = false;
    this.edit();
  }

  edit(): void {
    const newText = this.text.value;
    if (this.todo.text === newText) {
      return;
    }
    if (newText.length > 0) {
      this.store.dispatch(actions.edit({
        id: this.todo.id,
        text: this.text.value
      }));
    } else {
      this.delete();
    }
  }

  delete(): void {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }

}
