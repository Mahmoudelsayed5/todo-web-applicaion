import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';


export class Todo {
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
})
export class ListTodos implements OnInit {

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Become an expert in angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())

    // {
    //   id: 1,
    //   description: 'Learn to dance',
    // }, {
    //   id: 2, description: 'Become an expert in angular'
    // }, {
    //   id: 3, description: 'Visit India'
    // }
  ];

  constructor() {}

  ngOnInit(): void {}
}
