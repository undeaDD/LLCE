import { Component, HostListener } from '@angular/core';
import { UserAnswer } from '../models/Answer';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';
import { Location } from '@angular/common';
import { Question } from '../models/Question';
import { Router } from '@angular/router';

@Component({
  selector: 'llce-check',
  templateUrl: './check.component.html',
  host: {'class': 'flex-fill d-flex flex-column'}
})
export class CheckComponent {
  public isFinished = false;

  public poolId: number = 2;
  public shuffledItems: Question[] = [];
  public currentIndex = 0;

  public answer1: UserAnswer | undefined = undefined;
  public answer2: UserAnswer | undefined = undefined;
  public answer3: UserAnswer | undefined = undefined;
  public answer4: UserAnswer | undefined = undefined;
  public answer5: UserAnswer | undefined = undefined;

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

    this.loadAnswer();
  }

  public onNext() {
    this.buttonBackDisabled = false;
    this.buttonNextDisabled = (this.currentIndex + 1) === this.shuffledItems.length - 1;
    this.currentIndex += 1;
    
    this.loadAnswer();
  }

  public loadAnswer() {
    this.selectionArray = [false, false, false, false, false];
    if (typeof this.answers[this.currentIndex] === 'undefined') { return; }

    switch (this.shuffledItems[this.currentIndex].qtyp) {
      case "sc":
        if (this.answers[this.currentIndex].answer as number) {
          this.selectionArray[this.answers[this.currentIndex].answer as number] = true;
        }
        break;
      case "mc":
        if (this.answers[this.currentIndex].answer as number[]) {
          for (let i in (this.answers[this.currentIndex].answer as number[])) {
            this.selectionArray[i] = true;
          }
        }
        break;
      case "fi":
        if (typeof this.answers[this.currentIndex] !== 'undefined' && this.answers[this.currentIndex].answer) {
          this.userInput = this.answers[this.currentIndex].answer as string;
        }
        break;
      default:
        break;
    }
  }

  public onCancel() {
    let result = confirm("Willst du wirklich die Prüfung abbrechen?");
    if (result) {
      this.router.navigate(["/home"]);
    }
  }

  public selectionArray = [false, false, false, false, false];

  public selectItem(index: number) {
    this.selectionArray[index] = true;
  }

  public unselectItem(index: number) {
    this.selectionArray[index] = false;
  }

  public onAnswerSelect(index: number) {
    console.log("pre", this.answers[this.currentIndex]);
    switch (this.shuffledItems[this.currentIndex].qtyp) {
      case "sc":
        // if answer not empty
        if (typeof this.answers[this.currentIndex] !== "undefined") {
          // if answer was clicked again
          if (this.answers[this.currentIndex].answer === index) {
            // deselect same item
            this.answers[this.currentIndex] = undefined;
            this.unselectItem(index);
            break;
          } else {
            // unselect prev
            this.unselectItem(this.answers[this.currentIndex].answer as number);
          }
        }
        
        // select new item
        this.answers[this.currentIndex] = {
          qtyp: this.shuffledItems[this.currentIndex].qtyp,
          answer: index
        }
        this.selectItem(index);

        
        break;
      case "mc":
        if (typeof this.answers[this.currentIndex] !== "undefined") {
          if ((this.answers[this.currentIndex].answer as number[]).includes(index)) {
            // deselect same item
            this.answers[this.currentIndex].answer = (this.answers[this.currentIndex].answer as number[]).filter(i => i !== index);
            this.unselectItem(index);

            if ((this.answers[this.currentIndex].answer as number[]).length === 0) {
              this.answers = this.answers.splice(this.currentIndex, 1);
            }
          } else {
            // add new item to selection
            (this.answers[this.currentIndex].answer as number[]).push(index);
            this.selectItem(index);
          }
        } else {
          // add first item to selection
          this.answers[this.currentIndex] = {
            qtyp: this.shuffledItems[this.currentIndex].qtyp,
            answer: [index]
          }
          this.selectItem(index);
        }
        break;
      default:
        break;
    }
    
    console.log("post", this.answers[this.currentIndex]);
  }

  public onTextChange(value: string) {
    this.answers[this.currentIndex] = {
      qtyp: this.shuffledItems[this.currentIndex].qtyp,
      answer: value
    }
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
