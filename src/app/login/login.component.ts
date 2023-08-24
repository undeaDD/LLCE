import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'llce-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  @ViewChild('emailField')
  emailField!: ElementRef<HTMLInputElement>;

  @ViewChild('passwordField')
  passwordField!: ElementRef<HTMLInputElement>;

  constructor(private titleService: Title, private router: Router, private userService: UserService, private apiService: ApiService) {
    this.titleService.setTitle("LLCE - Anmelden");
  }

  public onLoginClick() {
    let email = this.emailField.nativeElement.value;
    let password = this.passwordField.nativeElement.value;

    if (this.apiService.login(email, password)) {
      this.userService.user = {
        email: email,
        isGuest: false,
        isLoggedIn: true,
        marked1: new Set(),
        marked2: new Set()
      };
      this.router.navigate(["home"]);
    } else {
      alert("Ungültige Login Daten.");
    }
  }

  public onGuestLoginClick() {
    this.userService.user = {
      email: undefined,
      isGuest: true,
      isLoggedIn: true,
      marked1: new Set(),
      marked2: new Set()
    };
    this.router.navigate(["home"]);
  }

}
