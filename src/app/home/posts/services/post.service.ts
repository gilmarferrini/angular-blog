import { Post } from './../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
