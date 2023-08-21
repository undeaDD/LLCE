import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'llce-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  public showLoginButton = true;
  public showLogoutButton = false;

  constructor(private titleService: Title, private router: Router, private userService: UserService) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.onNavigationChange(event.url);
      }
    });
  }

  public onNavigationChange(route: string) {
    switch (route) {
      case "/home":
        if(this.userService.user.isLoggedIn) {
          this.showLoginButton = false;
          this.showLogoutButton = true;
        } else {
          this.showLoginButton = true;
          this.showLogoutButton = false;
        }
        break;
      default:
        this.showLoginButton = false;
        this.showLogoutButton = false;
        break;
    }
  }

  public onLogout() {
    let result = confirm("Willst du dich wirklich abmelden?");

    if (result) {
      this.userService.user = {
        isGuest: false,
        isLoggedIn: false
      };
      this.router.navigate(["home"]);
    }
  }
}
