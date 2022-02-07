import { SignupService } from './../services/signup.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersModule } from './../users.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SignupComponent } from './signup.component';

describe(SignupComponent.name, () => {

  let component: SignupComponent
  let fixture: ComponentFixture<SignupComponent>
  let service: SignupService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UsersModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(SignupComponent)
    component = fixture.componentInstance
    service = TestBed.inject(SignupService)
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('Should input started on default empty value', () => {
    fixture.detectChanges()
    const defaultValues = {
      username: '',
      password: ''
    }

    const registerForm = component.registerFormGroup
    expect(registerForm.value).toEqual(defaultValues)
  })

})
