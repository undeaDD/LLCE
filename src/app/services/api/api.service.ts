import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private prefix: string = "llce_";

  public login(email: string, password: string): boolean {
    if (email.length === 0 || email.trim().length === 0 || !email.includes("@")) { return false; }
    if (password.length < 5) { return false; }

    let storedPassword = localStorage.getItem(this.prefix + email.toLowerCase());
    if (storedPassword && storedPassword === password) {
      return true;
    } else {
      return false;
    }
  }

  public register(email: string, passwordFirst: string, passwordSecond: string): boolean {
    if (email.length === 0 || email.trim().length === 0 || !email.includes("@")) { return false; }
    if (passwordFirst.length < 5 || passwordFirst !== passwordSecond) { return false; }

    let emailExists = localStorage.getItem(this.prefix + email.toLowerCase());
    if (emailExists) { 
      return false; 
    } else {
      localStorage.setItem(this.prefix + email.toLowerCase(), passwordFirst);
      return true;
    }
  }

}