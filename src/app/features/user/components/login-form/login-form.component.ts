import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validatePassword } from './validators/validatePassword';
import { validateEmail } from './validators/validateEmail';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import * as UserActions from '@app/features/user/user-slice/actions';
import { filter, Observable, tap } from 'rxjs';
import { RequestStatus } from '@app/const';
import { selectSendingStatus } from '../../user-slice';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.loginSendingStatus$ = this.store.select(selectSendingStatus);
    this.loginForm = this.fb.group({
      email: this.fb.control<string>('', [Validators.required, validateEmail]),
      password: this.fb.control<string>('', [
        Validators.required,
        validatePassword,
      ]),
    });
  }

  loginSendingStatus$: Observable<RequestStatus>;
  loginForm: FormGroup;

  backToPreviousPage() {
    this.router.navigateByUrl(this.authService.redirectUrl);
  }

  onSubmit(): void {
    if (this.loginForm && this.loginForm.valid) {
      this.store.dispatch(
        UserActions.login({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
      );
    }

    this.loginSendingStatus$
      .pipe(
        filter((status: RequestStatus) => status === RequestStatus.Success),
        tap(() => this.backToPreviousPage())
      )
      .subscribe();
  }
}
