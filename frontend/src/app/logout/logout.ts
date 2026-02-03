import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit{

  constructor(
    private hardcodedAuthentication: HardcodedAuthentication
  ) {}

  ngOnInit(): void {
    this.hardcodedAuthentication.logout();
  }
}
