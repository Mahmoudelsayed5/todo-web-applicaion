import { ActivatedRoute, RouterLink } from '@angular/router'; // Added RouterLink
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit{

  message = 'Some Welcome Message'
  name = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }
}
