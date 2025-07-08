import { createReducer, on } from '@ngrx/store';
import * as UserActions from './actions';
import { AuthorizationStatus, RequestStatus } from '@app/const';
import { User } from '../models';

export interface State {
  user: null | User;
  authorizationStatus: AuthorizationStatus;
  loginSendingStatus: RequestStatus;
}

export const initialState: State = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginSendingStatus: RequestStatus.Idle,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.checkAuth, (state) => ({
    ...state,
    user: null,
    authorizationStatus: AuthorizationStatus.Unknown,
  })),
  on(UserActions.checkAuthSuccess, (state, action) => ({
    ...state,
    user: action.user,
    authorizationStatus: AuthorizationStatus.Auth,
  })),
  on(UserActions.checkAuthFailure, (state) => ({
    ...state,
    user: null,
    authorizationStatus: AuthorizationStatus.NoAuth,
  }))
);
