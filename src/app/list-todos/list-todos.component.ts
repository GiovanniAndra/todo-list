import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/model/todo.model';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      description: 'Learn to Dance',
      done: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: 'Learn Angular',
      done: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: 'Visit Another Country',
      done: false,
      targetDate: new Date(),
    },
  ];

  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // }

  constructor() {}

  ngOnInit(): void {}
}
