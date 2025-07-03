import { createSelector } from '@ngrx/store';
import { AppState } from '../../../store';

export const selectFeature = (state: AppState) => state.offers;

export const offersSelector = createSelector(
  selectFeature,
  (state) => state.offers
);
