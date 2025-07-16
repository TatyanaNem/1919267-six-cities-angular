import { createReducer, on } from '@ngrx/store';
import { Offer } from '@app/features/offers/models';
import * as OfferActions from '../offer-slice/actions';
import * as FavoritesActions from '@app/features/favorites/favorites-slice';

export interface State {
  isLoading: boolean;
  activeOffer: Offer | null;
  error: string | null;
  nearByOffers: Offer[];
}

export const initialState: State = {
  isLoading: false,
  activeOffer: null,
  error: null,
  nearByOffers: [],
};

export const reducer = createReducer(
  initialState,
  on(OfferActions.getActiveOffer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(OfferActions.getActiveOfferSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    activeOffer: action.offer,
  })),
  on(OfferActions.getActiveOfferFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(OfferActions.getNearbyOffers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(OfferActions.getNearbyOffersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    nearByOffers: action.nearByOffers,
  })),
  on(OfferActions.getActiveOfferFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(FavoritesActions.updateFavoriteStatusSuccess, (state) => {
    if (!state.activeOffer) return state;

    return {
      ...state,
      activeOffer: {
        ...state.activeOffer,
        isFavorite: !state.activeOffer.isFavorite,
      },
    };
  })
);
