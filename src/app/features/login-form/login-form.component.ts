import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, validateEmail]),
    password: this.fb.control('', [Validators.required, validatePassword]),
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
