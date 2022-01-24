import { Post } from './../models/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  @Input() posts: Post[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
