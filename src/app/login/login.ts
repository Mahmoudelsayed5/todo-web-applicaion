import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Welcome } from '../welcome/welcome';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  username = "in2minutes"
  password = 'dummy'
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  handleLogin() {
    if(this.username==='in28minutes' && this.password === 'dummy') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    // console.log(this.username);
  }

}
