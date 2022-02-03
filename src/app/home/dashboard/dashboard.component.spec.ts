import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './../services/token.service';
import { UserService } from './../services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { RouterTestingModule } from '@angular/router/testing';
import { buildUser } from '../services/test/build-user';

describe(DashboardComponent.name, () => {

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

  it(`#${DashboardComponent.prototype.logout.name} Should call tokenService.removeToken and userService.removeUser when trigger logout`, () => {
    const user = buildUser()
    spyOn(userService, 'getUser').and.returnValue(user)
    spyOn(userService, 'removeUser')
    spyOn(tokenService, 'removeToken')
    fixture.detectChanges();

    component.logout()

    expect(tokenService.removeToken).toHaveBeenCalled()
    expect(userService.removeUser).toHaveBeenCalled()
  })

  it('(D) Should display in img alt attribute with value "Foto de any_username"', () => {
    const user = buildUser();
    spyOn(userService, 'getUser').and.returnValue(user)
    fixture.detectChanges();

    const imageElement: HTMLElement = fixture.nativeElement.querySelector('.header__profile > img')
    expect(imageElement.getAttribute('alt')).toBe('Foto de any_username')
  })
})
