import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { validatePassword } from './validators/validatePassword';
import { validateEmail } from './validators/validateEmail';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import * as UserActions from '@app/features/user/user-slice/actions';
import { filter, Observable, tap } from 'rxjs';
import { RequestStatus } from '@app/const';
import { loginSendingStatus } from '../../user-slice';

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
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.loginSendingStatus$ = this.store.select(loginSendingStatus);
  }
  private fb = inject(FormBuilder);
  loginSendingStatus$: Observable<RequestStatus>;

  loginForm = this.fb.group({
    email: this.fb.control<string>('', [Validators.required, validateEmail]),
    password: this.fb.control<string>('', [
      Validators.required,
      validatePassword,
    ]),
  });

  backToPreviousPage() {
    this.router.navigateByUrl(this.authService.redirectUrl);
  }

  onSubmit(): void {
    const formValues = this.loginForm.value;
    this.store.dispatch(
      UserActions.login({
        email: formValues.email!,
        password: formValues.password!,
      })
    );
    this.loginSendingStatus$
      .pipe(
        filter((status: RequestStatus) => status === RequestStatus.Success),
        tap(() => this.backToPreviousPage())
      )
      .subscribe();
  }
}
