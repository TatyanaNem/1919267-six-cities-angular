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
  on(FavoritesActions.updateFavoriteStatusSuccess, (state, action) => {
    const toBeRemoved = action.status === 0;
    const { id, isFavorite } = action.offer;

    // Создаем копию массива, обновляя объект с заданным id
    let updatedFavorites = state.favorites.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite }; // Обновляем только нужный объект
      }
      return item;
    });

    // Удаляем или добавляем объект в зависимости от статуса
    if (toBeRemoved) {
      updatedFavorites = updatedFavorites.filter((item) => item.id !== id);
    } else {
      updatedFavorites = [...updatedFavorites, action.offer];
    }

    return { ...state, favorites: updatedFavorites };
  })
);
