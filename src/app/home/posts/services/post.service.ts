import { Post } from './../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly base_URL = environment.apiURL

  constructor(
    private http: HttpClient
  ) { }

  listPosts() {
    return this.http.get<Post[]>(`${this.base_URL}/post`)
  }

  createPost(bearerToken: string, data: FormData) {
    const headers = new HttpHeaders().append('Authorization', `Bearer ${bearerToken}`)
    return this.http.post(`${this.base_URL}/post`, data, {
      headers
    })
  }
}
