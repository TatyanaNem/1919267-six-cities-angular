import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services';
import * as UserActions from './actions';
import { Credentials, User } from '../models';
import { JWTService } from 'src/app/core/services/jwt.service';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  getUser$ = createEffect(
    (actions$ = inject(Actions), authService = inject(AuthService)) =>
      actions$.pipe(
        ofType(UserActions.checkAuth),
        mergeMap(() => {
          return authService.checkAuth().pipe(
            map((user: User) => UserActions.checkAuthSuccess({ user })),
            catchError((error) =>
              of(UserActions.checkAuthFailure({ error: error.message }))
            )
          );
        })
      )
  );

  login$ = createEffect(
    (
      actions$ = inject(Actions),
      authService = inject(AuthService),
      jwtService = inject(JWTService)
    ) =>
      actions$.pipe(
        ofType(UserActions.login),
        mergeMap((loginData: Credentials) => {
          return authService.login(loginData).pipe(
            map((user: User) => {
              jwtService.setToken(user.token);
              return UserActions.loginSuccess({ user });
            }),
            catchError((error) =>
              of(UserActions.loginFailure({ error: error.message }))
            )
          );
        })
      )
  );

  logout$ = createEffect(
    (
      actions$ = inject(Actions),
      authService = inject(AuthService),
      jwtService = inject(JWTService)
    ) =>
      actions$.pipe(
        ofType(UserActions.logout),
        mergeMap(() => {
          return authService.logout().pipe(
            map(() => {
              jwtService.dropToken();
              return UserActions.logoutSuccess();
            }),
            catchError((error) =>
              of(UserActions.logoutFailure({ error: error.message }))
            )
          );
        })
      )
  );
}
