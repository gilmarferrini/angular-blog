import { TokenService } from './../../services/token.service';
import { UserService } from './../../services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePostComponent } from './create-post.component';
import { PostService } from '../services/post.service';
import { PostsModule } from '../posts.module';


describe(CreatePostComponent.name, () => {
  let fixture: ComponentFixture<CreatePostComponent>
  let component: CreatePostComponent

  let userService: UserService
  let postService: PostService
  let tokenService: TokenService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsModule]
    }).compileComponents()

    fixture = TestBed.createComponent(CreatePostComponent)
    component = fixture.componentInstance

    userService = TestBed.inject(UserService)
    postService = TestBed.inject(PostService)
    tokenService = TestBed.inject(TokenService)

    it('Should create component', () => {
      expect(component).toBeTruthy()
    })
  })
})
