import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { validatePassword } from './validators/validatePassword';
import { validateEmail } from './validators/validateEmail';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services';
import { Credentials } from '../../models';

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
    private userService: UserService
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
    this.router.navigateByUrl(this.userService.redirectUrl);
  }

  onSubmit(): void {
    this.loginData = this.loginForm.value as Credentials;
    this.backToPreviousPage();
  }
}
