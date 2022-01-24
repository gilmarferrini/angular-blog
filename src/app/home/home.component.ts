import { PostService } from './posts/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './posts/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  textFilter = ''

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadAllPosts()
  }

  loadAllPosts() {
    this.postService.listPosts().subscribe(data => {
      this.posts = data;
    })
  }

  filterPosts() {
    if (!this.textFilter) {
      this.loadAllPosts()
      return;
    }

    this.posts = this.posts.filter(
      post => post.title.toLowerCase().includes(this.textFilter.toLowerCase())
      )
  }
}
