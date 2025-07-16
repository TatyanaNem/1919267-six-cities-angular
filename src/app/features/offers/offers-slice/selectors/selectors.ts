import { AppState } from '@app/store';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.OFFERS_DATA;

export const offersSelector = createSelector(
  selectFeature,
  (state) => state.offers
);

export const currentCitySelector = createSelector(
  selectFeature,
  (state) => state.currentCity
);

export const offersByCitySelector = createSelector(
  offersSelector,
  currentCitySelector,
  (allOffers, currentCity) => {
    return allOffers.filter((offer) => offer.city.name === currentCity);
  }
);

export const selectIsLoading = createSelector(
  selectFeature,
  (state) => state.isLoading
);
