import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'llce-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle("LLCE - Home");
  }
}
