import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'llce-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  @ViewChild('emailField')
  emailField!: ElementRef<HTMLInputElement>;

  @ViewChild('passwordFieldFirst')
  passwordFieldFirst!: ElementRef<HTMLInputElement>;

  @ViewChild('passwordFieldSecond')
  passwordFieldSecond!: ElementRef<HTMLInputElement>;

  constructor(private titleService: Title, private router: Router, private apiService: ApiService) {
    this.titleService.setTitle("LLCE - Registrieren");
  }

  public onRegisterClick() {
    let email = this.emailField.nativeElement.value;
    let passwordFirst = this.passwordFieldFirst.nativeElement.value;
    let passwordSecond = this.passwordFieldSecond.nativeElement.value;

    if (this.apiService.register(email, passwordFirst, passwordSecond)) {
      this.router.navigate(["login"]);
    } else {
      alert("Ungültige Eingaben.");
    }
  }
}
