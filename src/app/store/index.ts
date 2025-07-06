import { ActionReducerMap } from '@ngrx/store';
import * as fromOffers from '../features/offers/offers-slice/reducers/offers.reducer';
import * as fromFavorites from '../features/favorites/favorites-slice/favorites.reducer';
import * as fromOffer from '../features/offer/offer-slice/offer.reducer';
import { NameSpace } from '@app/const';

export interface AppState {
  [NameSpace.OffersData]: fromOffers.State;
  [NameSpace.FavoritesData]: fromFavorites.State;
  [NameSpace.OfferData]: fromOffer.State;
}

export const rootReducers: ActionReducerMap<AppState> = {
  [NameSpace.OffersData]: fromOffers.reducer,
  [NameSpace.FavoritesData]: fromFavorites.reducer,
  [NameSpace.OfferData]: fromOffer.reducer,
};
