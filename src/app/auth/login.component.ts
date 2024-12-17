import { Component, OnInit } from '@angular/core';
import { LoginResult } from './login-result';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BaseFormComponent } from '../base-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, RouterLink, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent
  extends BaseFormComponent implements OnInit {
  title?: string;
  loginResult?: LoginResult;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    super();
  }
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
      });
  }
  onSubmit() {
    var loginRequest = <LoginRequest>{};
    loginRequest.username = this.form.controls['username'].value;
    loginRequest.password = this.form.controls['password'].value;
    this.authService
      .login(loginRequest)
      .subscribe({
        next: (result) => {
          console.log(result);
          this.loginResult = result;
      }, 
      error: (error) => {
        console.log(error);
        if (error.status == 401) {
          this.loginResult = error.error;
        }
      }
    });
  }
}
