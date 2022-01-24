import { TokenService } from './../../services/token.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  title: string = ''
  body: string = ''
  post_image!: File;

  message = ''

  constructor(
    private userService: UserService,
    private postService: PostService,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
  }

  createPost() {
    const form = new FormData()
    const userId = this.userService.getUser().id
    const token = this.tokenService.getToken()

    if (!userId || !token) {
      return;
    }

    form.append('user_id', userId)
    form.append('title', this.title)
    form.append('body', this.body)
    form.append('post_image', this.post_image)

    this.postService.createPost(token, form).subscribe(response => {
      this.message = 'Post criado com sucesso!'

      this.title = ''
      this.body = ''
    })
  }

  saveImage(fileImage: any) {
    const [file] = fileImage?.files
    this.post_image = file;
  }

}
