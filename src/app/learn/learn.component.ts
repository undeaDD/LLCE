import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'llce-learn',
  templateUrl: './learn.component.html'
})
export class LearnComponent {
  public poolId: number = 2;

  public items: {
    qid: string,
    qtxt: string[],
    qanswers: {
      txt: string[],
      correct: boolean
    }[]
  }[] = [];
  
  constructor(private loc: Location, private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("LLCE - Lernmodus");
    this.poolId = (this.loc.getState() as {poolId: any}).poolId;
    this.items = (this.loc.getState() as {pool: any}).pool;
  }

  public getBgColor(id: any): string {
    return this.userService.isMarked(this.poolId, id) ? "var(--bs-primary)" : "var(--bs-accordion-btn-bg)";
  }

  public getMerkenButton(id: any): string {
    return this.userService.isMarked(this.poolId, id) ? "Nicht Markieren" : "Markieren";
  }

  public onToggle(event: any, id: any) {
    event.stopPropagation()

    this.userService.toggleMarked(this.poolId, id);
  }

  public getAnswer(qanswers: { txt: string[]; correct?: boolean; }[]): string {
    return qanswers.filter(i => i?.correct ?? true).map(i => i.txt).join()
  }
}