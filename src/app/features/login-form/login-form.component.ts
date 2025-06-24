import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validatePassword } from './validators/validatePassword';
import { validateEmail } from './validators/validateEmail';
import { LoginData } from './model/loginData.model';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, validateEmail]),
    password: new FormControl('', [Validators.required, validatePassword]),
  });

  private loginData = {
    email: '',
    password: '',
  };

  onSubmit(): void {
    this.loginData = this.loginForm.value as LoginData;
    console.log(this.loginForm.value);
  }
}
