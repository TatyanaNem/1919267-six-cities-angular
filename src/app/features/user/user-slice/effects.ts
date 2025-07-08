import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { UserService } from '../services';
import * as UserActions from './actions';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  getUser$ = createEffect(
    (actions$ = inject(Actions), userService = inject(UserService)) =>
      actions$.pipe(
        ofType(UserActions.checkAuth),
        mergeMap(() => {
          return userService.checkAuth().pipe(
            map((user: User) => UserActions.checkAuthSuccess({ user })),
            catchError((error) =>
              of(UserActions.checkAuthFailure({ error: error.message }))
            )
          );
        })
      )
  );
}
