import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './../services/token.service';
import { UserService } from './../services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { RouterTestingModule } from '@angular/router/testing';

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

})
