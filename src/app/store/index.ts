import { ActionReducerMap } from '@ngrx/store';
import * as fromOffers from '../features/offers/offers-slice/reducers/offers.reducer';
import * as fromFavorites from '../features/favorites/favorites-slice/favorites.reducer';
import * as fromOffer from '../features/offer/offer-slice/offer.reducer';

export interface AppState {
  [fromOffers.offersFeatureKey]: fromOffers.State;
  [fromFavorites.favoritesFeatureKey]: fromFavorites.State;
  [fromOffer.offerFeatureKey]: fromOffer.State;
}

export const rootReducers: ActionReducerMap<AppState> = {
  [fromOffers.offersFeatureKey]: fromOffers.reducer,
  [fromFavorites.favoritesFeatureKey]: fromFavorites.reducer,
  [fromOffer.offerFeatureKey]: fromOffer.reducer,
};
