import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [SignupComponent]
})
export class UsersModule { }
