import { Offer } from '@app/features/offers/models';
import { createReducer, on } from '@ngrx/store';
import * as FavoritesActions from './actions';

export interface State {
  isLoading: boolean;
  favorites: Offer[];
  error: string | null;
}

export const initialState: State = {
  isLoading: false,
  favorites: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(FavoritesActions.getFavorites, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(FavoritesActions.getFavoritesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    favorites: action.favorites,
  })),
  on(FavoritesActions.getFavoritesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(FavoritesActions.updateFavoriteStatus, (state, action) => {
    const updatedFavorites = state.favorites.map((offer: Offer) => {
      return offer.id === action.id
        ? { ...offer, isFavorite: action.status }
        : offer;
    });
    // Если статус становится false, удаляем предложение из избранных
    if (!action.status) {
      return {
        ...state,
        favorites: updatedFavorites.filter((item) => item.id !== action.id),
      };
    } else {
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }
  })
);
