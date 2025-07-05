import { AppState } from '@app/store';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.offer;

export const selectActiveOffer = createSelector(
  selectFeature,
  (state) => state.activeOffer
);
