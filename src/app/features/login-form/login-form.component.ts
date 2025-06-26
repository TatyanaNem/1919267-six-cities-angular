import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { validatePassword } from './validators/validatePassword';
import { validateEmail } from './validators/validateEmail';
import { LoginData } from './model/loginData.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, validateEmail]),
    password: this.fb.control('', [Validators.required, validatePassword]),
  });

  private loginData = {
    email: '',
    password: '',
  };

  backToPreviousPage() {
    console.log(this.route.snapshot.queryParams['redirectTo']);
    this.router.navigate([this.route.snapshot.queryParams['redirectTo']]);
  }

  onSubmit(): void {
    this.loginData = this.loginForm.value as LoginData;
    this.backToPreviousPage();
  }
}
