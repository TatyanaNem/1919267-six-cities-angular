import { createAction, props } from '@ngrx/store';
import { User } from '../../models';

export const checkAuth = createAction('[Main Offers Page] Check Auth');
export const checkAuthSuccess = createAction(
  '[Main Offers Page] Check Auth Success',
  props<{ user: User }>()
);
export const checkAuthFailure = createAction(
  '[Main Offers Page] Check Auth Failure',
  props<{ error: string }>()
);
