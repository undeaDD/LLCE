import { Component, HostListener } from '@angular/core';
import { Answer } from '../models/Answer';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';
import { Location } from '@angular/common';
import { Question } from '../models/Question';
import { Router } from '@angular/router';

@Component({
  selector: 'llce-check',
  templateUrl: './check.component.html'
})
export class CheckComponent {
  public isFinished = false;

  public poolId: number = 2;
  public shuffledItems: Question[] = [];
  public currentIndex = 0;

  public answers: any[] = [];

  public userInput: string = "";
  public buttonBackDisabled = true;
  public buttonNextDisabled = false;

  constructor(private loc: Location, private titleService: Title, private userService: UserService, private router: Router) {
    this.titleService.setTitle("LLCE - Checkmodus");
    this.poolId = (this.loc.getState() as {poolId: any}).poolId;
    this.shuffledItems = (this.loc.getState() as {pool: any}).pool;
    this.shuffledItems = this.shuffledItems.sort( () => Math.random() - 0.5);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

  public onBack() {
    this.buttonNextDisabled = false;
    this.buttonBackDisabled = (this.currentIndex - 1) === 0;
    this.currentIndex -= 1;
  }

  public onNext() {
    this.buttonBackDisabled = false;
    this.buttonNextDisabled = (this.currentIndex + 1) === this.shuffledItems.length - 1;
    this.currentIndex += 1;
  }

  public onCancel() {
    let result = confirm("Willst du wirklich die Prüfung abbrechen?");
    if (result) {
      this.router.navigate(["/home"]);
    }
  }

  public onAnswerSelect(index: number) {

  }

  public onFinish() {
    if (this.answers.length !== this.shuffledItems.length) {
      let result = confirm("Du hast noch unbeantwortete Fragen. Willst du wirklich die Prüfung abschließen?");
      if (result) {
        this.router.navigate(["/home"]);
      } 
    } else {
      let result = confirm("Willst du wirklich die Prüfung abschließen?");
      if (result) {
        this.router.navigate(["/home"]);
      }
    }
  }

}
