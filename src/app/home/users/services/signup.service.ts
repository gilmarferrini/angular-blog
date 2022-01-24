import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly base_URL = environment.apiURL

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http.post(`${this.base_URL}/users`, {
      username,
      password
    })
  }
}
