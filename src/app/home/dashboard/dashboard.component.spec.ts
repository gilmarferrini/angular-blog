import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './../services/token.service';
import { UserService } from './../services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../users/models/user';

describe(DashboardComponent.name, () => {

  function buildUser(): User {
    return {
      id: 'any_id',
      avatar: 'any_avatar',
      username: 'any_username',
      created_at: new Date()
    }
  }


  let fixture: ComponentFixture<DashboardComponent>
  let component: DashboardComponent
  let userService: UserService
  let tokenService: TokenService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardModule,
        HttpClientModule,
        RouterTestingModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    userService = TestBed.inject(UserService)
    tokenService = TestBed.inject(TokenService)
  })

  it ('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it ('Should get user when load component', () => {
    const user = buildUser();

    spyOn(userService, 'getUser').and.returnValue(user)
    fixture.detectChanges();

    expect(component.user).toBe(user);
  })

  it ('Should change user avatar to default avatar when avatar to be null', () => {
    const user = buildUser();

    spyOn(userService, 'getUser').and.returnValue({ ...user, avatar: null})
    fixture.detectChanges();

    expect(component.user.avatar).toBe(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
  })

})
