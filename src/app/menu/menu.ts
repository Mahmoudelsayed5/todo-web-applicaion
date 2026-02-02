import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit{

  // isUserLoggedIn: boolean = false;
  constructor(public hardcodedAuthentication: HardcodedAuthentication) {}

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
  }

}
