import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../../models';

export const checkAuth = createAction('[Main Offers Page] Check Auth');
export const checkAuthSuccess = createAction(
  '[Main Offers Page] Check Auth Success',
  props<{ user: User }>()
);
export const checkAuthFailure = createAction(
  '[Main Offers Page] Check Auth Failure',
  props<{ error: string }>()
);
export const login = createAction('[Login Page]', props<Credentials>());
export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ user: User }>()
);
export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: string }>()
);
