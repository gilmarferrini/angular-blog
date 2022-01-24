import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLoggedIn() {
    return !!localStorage.getItem('@token')
  }

  saveToken(token: string) {
    localStorage.setItem('@token', token)
  }

  removeToken() {
    localStorage.removeItem('@token')
  }
}
