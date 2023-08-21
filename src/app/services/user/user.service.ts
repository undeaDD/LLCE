import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    public user: User = {
        isGuest: true,
        isLoggedIn: false
    };

    constructor() { }
}