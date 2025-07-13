import { createReducer, on } from '@ngrx/store';
import { Offer } from '@app/features/offers/models';
import * as OffersActions from '../actions';
import { Cities } from '@app/const';
import * as FavoritesActions from '@app/features/favorites/favorites-slice';

export interface State {
  isLoading: boolean;
  offers: Offer[];
  error: string | null;
  currentCity: Cities;
}

export const initialState: State = {
  isLoading: false,
  offers: [],
  error: null,
  currentCity: Cities.Paris,
};

export const reducer = createReducer(
  initialState,
  on(OffersActions.setCurrentCity, (state, action) => ({
    ...state,
    currentCity: action.city,
  })),
  on(OffersActions.getOffers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(OffersActions.getOffersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    offers: action.offers,
  })),
  on(OffersActions.getOffersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(FavoritesActions.updateFavoriteStatus, (state, action) => ({
    ...state,
    offers: state.offers.map((offer: Offer) =>
      offer.id === action.id
        ? { ...offer, isFavorite: !offer.isFavorite }
        : offer
    ),
  }))
);
