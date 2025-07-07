import { createSelector } from '@ngrx/store';
import { AppState } from '../../../store';

export const selectFeature = (state: AppState) => state.REVIEWS_DATA;

export const reviewsSelector = createSelector(
  selectFeature,
  (state) => state.reviews
);
