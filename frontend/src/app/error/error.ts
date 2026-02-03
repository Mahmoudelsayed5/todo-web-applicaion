import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error implements OnInit{

  errorMessage = 'An error occured! Contact support ****'

  constructor() {

  }

  ngOnInit(){

  }

}
