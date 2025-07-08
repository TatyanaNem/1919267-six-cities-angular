import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { validatePassword } from './validators/validatePassword';
import { validateEmail } from './validators/validateEmail';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/features/auth/services';
import { Credentials } from '@app/features/auth/models';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
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
    this.router.navigateByUrl(this.authService.redirectUrl);
  }

  onSubmit(): void {
    this.loginData = this.loginForm.value as Credentials;
    this.backToPreviousPage();
  }
}
