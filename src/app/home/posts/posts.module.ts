import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    ListPostsComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListPostsComponent, CreatePostComponent]
})
export class PostsModule { }
