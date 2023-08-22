import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import lpi1 from "../../assets/json/lpi1.json";
import lpi2 from "../../assets/json/lpi1.json";
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'llce-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  buttonsDisabled = true;
  selectedPool = "lpic1.json"

  learnWidthMarked = 0;

  // TODO
  checkWidthRight = 0;
  checkWidthWrong = 0;

  // TODO
  examWidthRight = 0;
  examWidthWrong = 0;

  constructor(private titleService: Title, private router: Router, private userService: UserService) {
    this.titleService.setTitle("LLCE - Home");
    this.buttonsDisabled = !userService.user.isLoggedIn;
    this.updateProgressBars();
  }

  public updateProgressBars() {
    switch (this.selectedPool) {
      case "lpic1.json": 
        this.learnWidthMarked = this.userService.user.marked1.size / lpi1.length * 100;
        break;
      case "lpic2.json":
        this.learnWidthMarked = this.userService.user.marked2.size / lpi2.length * 100;
        break;
      default:
        this.learnWidthMarked = 0;
        break;
    }
  }

  public onStart(route: string) {
    switch (this.selectedPool) {
      case "lpic1.json":
        this.router.navigate([route], {state: {pool: lpi1, poolId: 0}});
        break;
      case "lpic2.json":
        this.router.navigate([route], {state: {pool: lpi2, poolId: 1}});
        break;
      default:
        this.router.navigate([route], {state: {pool: [], poolId: 2}});
        break;
    }
  }
}
