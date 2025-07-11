import { AppState } from '@app/store';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.OFFER_DATA;

export const selectActiveOffer = createSelector(
  selectFeature,
  (state) => state.activeOffer
);

export const selectNearbyOffers = createSelector(
  selectFeature,
  (state) => state.nearByOffers
);

export const selectIsLoading = createSelector(
  selectFeature,
  (state) => state.isLoading
);
