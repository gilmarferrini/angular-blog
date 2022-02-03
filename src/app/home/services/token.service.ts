import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLoggedIn() {
    console.log(!!localStorage.getItem('@token'))
    return !!localStorage.getItem('@token')
  }

  getToken() {
    if (!this.isLoggedIn) {
      return null;
    }

    return localStorage.getItem('@token')
  }

  saveToken(token: string) {
    localStorage.setItem('@token', token)
  }

  removeToken() {
    localStorage.removeItem('@token')
  }
}
