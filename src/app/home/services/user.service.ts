import { Injectable } from '@angular/core';
import { User } from '../users/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(user: User) {
    localStorage.setItem('@user', JSON.stringify(user))
  }

  getUser() {
    const user = localStorage.getItem('@user')

    if (user) {
      return JSON.parse(user);
    }

    return undefined;
  }

  removeUser() {
    localStorage.removeItem('@user')
  }
}
