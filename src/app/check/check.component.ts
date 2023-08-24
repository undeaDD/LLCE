import { Component } from '@angular/core';
import { Answer } from '../models/Answer';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';
import { Location } from '@angular/common';
import { Question } from '../models/Question';

@Component({
  selector: 'llce-check',
  templateUrl: './check.component.html'
})
export class CheckComponent {
  public poolId: number = 2;
  public shuffledItems: Question[] = [];
  public currentIndex = 0;

  public userInput: string = "";

  constructor(private loc: Location, private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("LLCE - Checkmodus");
    this.poolId = (this.loc.getState() as {poolId: any}).poolId;
    this.shuffledItems = (this.loc.getState() as {pool: any}).pool;
    this.shuffledItems = this.shuffledItems.sort( () => Math.random() - 0.5);
  }

  public onBack() {
    confirm("Willst du wirklich Abbrechen");
  }

}
