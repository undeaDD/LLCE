import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import lpi1 from "../../assets/json/lpi1.json";

@Component({
  selector: 'llce-learn',
  templateUrl: './learn.component.html'
})
export class LearnComponent {
  public items = lpi1;

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle("LLCE - Lernmodus");
  }

  public onSelect(id: any) {
    console.log(id)
  }

}