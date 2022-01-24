import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private readonly base_URL = environment.apiURL

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.base_URL}/auth`, {
      username,
      password
    })
  }

}
