import { AppState } from '@app/store';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.favorites;

export const selectFavorites = createSelector(
  selectFeature,
  (state) => state.favorites
);
