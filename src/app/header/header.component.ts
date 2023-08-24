import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'llce-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  public themeName = "☀️";

  public toggleTheme() {
    if (this.themeName === "☀️") {
      this.themeName = "🌙";
      document.documentElement.setAttribute('data-bs-theme','light');
    } else {
      this.themeName = "☀️";
      document.documentElement.setAttribute('data-bs-theme','dark');
    }
  }

  public showLoginButton = true;
  public showLogoutButton = false;

  constructor(router: Router, private userService: UserService) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.onNavigationChange(event.url);
      }
    });
  }

  public onNavigationChange(route: string) {
    switch (route) {
      case "/":
        // automatically gets redirected to home wihtout new navigationStateChange Event being fired ...
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
    if (result) { window.location.reload(); }
  }
}
