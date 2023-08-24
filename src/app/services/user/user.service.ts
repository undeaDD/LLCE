import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    public user: User = {
        email: undefined,
        isGuest: true,
        isLoggedIn: false,

        marked1: new Set(),
        marked2: new Set()
    };

    constructor() { }

    public isMarked(poolId: number, id: any): boolean {
      switch (poolId) {
        case 0:
          return this.user.marked1.has(id);
        case 1:
          return this.user.marked2.has(id);
        default:
          return false;
      }
    }

    public toggleMarked(poolId: number, id: any): void {
      switch (poolId) {
        case 0:
          if (this.user.marked1.has(id)) {
            this.user.marked1.delete(id);
          } else {
            this.user.marked1.add(id);
          }
          break;
        case 1:
          if (this.user.marked2.has(id)) {
            this.user.marked2.delete(id);
          } else {
            this.user.marked2.add(id);
          }
          break;
        default:
          break;
      }
      
    }
}