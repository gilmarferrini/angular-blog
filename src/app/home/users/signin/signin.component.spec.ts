import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './../../services/user.service';
import { TokenService } from './../../services/token.service';
import { SigninService } from './../services/signin.service';
import { FormBuilder } from '@angular/forms';
import { UsersModule } from './../users.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { RouterTestingModule } from '@angular/router/testing';

describe(SigninComponent.name, () => {

  let component: SigninComponent
  let fixture: ComponentFixture<SigninComponent>
  let formBuilder: FormBuilder
  let signinService: SigninService
  let tokenService: TokenService
  let userService: UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UsersModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent)
    component = fixture.componentInstance

    tokenService = TestBed.inject(TokenService)
    signinService = TestBed.inject(SigninService)
    tokenService = TestBed.inject(TokenService)
    userService = TestBed.inject(UserService)
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

})
