import { ActionReducerMap } from '@ngrx/store';
import * as fromOffers from '../features/offers/offers-slice/reducers/offers.reducer';
import * as fromFavorites from '../features/favorites/favorites-slice/favorites.reducer';

export interface AppState {
  [fromOffers.offersFeatureKey]: fromOffers.State;
  [fromFavorites.favoritesFeatureKey]: fromFavorites.State;
}

export const rootReducers: ActionReducerMap<AppState> = {
  [fromOffers.offersFeatureKey]: fromOffers.reducer,
  [fromFavorites.favoritesFeatureKey]: fromFavorites.reducer,
};
