import { TokenService } from './../../services/token.service';
import { UserService } from './../../services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePostComponent } from './create-post.component';
import { PostService } from '../services/post.service';
import { PostsModule } from '../posts.module';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { buildUser } from '../../services/test/build-user';


describe(CreatePostComponent.name, () => {
  let fixture: ComponentFixture<CreatePostComponent>
  let component: CreatePostComponent

  let userService: UserService
  let postService: PostService
  let tokenService: TokenService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PostsModule,
        HttpClientTestingModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(CreatePostComponent)
    component = fixture.componentInstance

    userService = TestBed.inject(UserService)
    postService = TestBed.inject(PostService)
    tokenService = TestBed.inject(TokenService)

  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('(D) Should display empty value for title, body and message', () => {
    expect(component.title).withContext('Should display empty value for title').toBe('')
    expect(component.body).withContext('Should display empty value for body').toBe('')
    expect(component.message).withContext('Should display empty value for message').toBe('')
  })

  it('Should not call createPost when userId and token equal null', () => {
    spyOn(userService, 'getUser').and.returnValue(null)
    spyOn(tokenService, 'getToken').and.returnValue(null)
    spyOn(postService, 'createPost')
    fixture.detectChanges()

    component.createPost()
    expect(postService.createPost).not.toHaveBeenCalled()
  })


  it('Should not call createPost when userId is valid and token equal null', () => {
    const user = buildUser()
    spyOn(userService, 'getUser').and.returnValue(user)
    spyOn(tokenService, 'getToken').and.returnValue(null)
    spyOn(postService, 'createPost'
    )
    fixture.detectChanges()
    component.createPost()

    expect(postService.createPost).not.toHaveBeenCalled()
  })

})
