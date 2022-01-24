import { Post } from './../models/post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = []

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadAllPosts()
  }

  loadAllPosts() {
    this.postService.listPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
