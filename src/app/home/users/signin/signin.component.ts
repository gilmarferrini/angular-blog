import { UserService } from './../../services/user.service';
import { TokenService } from './../../services/token.service';
import { SigninService } from './../services/signin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginFormGroup!: FormGroup
  loginError: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  signin() {

    this.loginError = ''

    const { username, password } = this.loginFormGroup.getRawValue();
    this.signinService.login(username, password).subscribe((response) => {
      this.tokenService.saveToken(response.token)
      this.userService.saveUser(response.user)
    }, (error) => {
      this.loginError = 'Credenciais incorretas'
    })
  }

}
