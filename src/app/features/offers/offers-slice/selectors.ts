import { createSelector } from '@ngrx/store';
import { AppState } from '../../../store';

export const selectFeature = (state: AppState) => state.offers;

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
  (allOffers, currentCity) =>
    allOffers.filter((offer) => offer.city.name === currentCity)
);
