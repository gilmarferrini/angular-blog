import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';


@NgModule({
  declarations: [
    PostComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListPostsComponent]
})
export class PostsModule { }
