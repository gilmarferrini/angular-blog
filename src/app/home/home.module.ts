import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostsModule,
    UsersModule
  ]
})
export class HomeModule { }
