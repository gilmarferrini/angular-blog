import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerFormGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  signup() {
    const { username, password } = this.registerFormGroup.getRawValue()
    this.signupService.register(username, password).subscribe((data) => {
      this.router.navigate(['home/signin'])
    })
  }

}
