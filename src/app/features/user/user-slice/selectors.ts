import { AppState } from '@app/store';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.USER_DATA;

export const isAuthSelector = createSelector(
  selectFeature,
  (state) => state.authorizationStatus
);

export const loginSendingStatus = createSelector(
  selectFeature,
  (state) => state.loginSendingStatus
);
