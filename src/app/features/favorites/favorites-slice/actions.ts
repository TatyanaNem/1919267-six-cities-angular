import { Offer } from '@app/features/offers/models';
import { createAction, props } from '@ngrx/store';

export const getFavorites = createAction('[Favorites Page] Get Favorites');
export const getFavoritesSuccess = createAction(
  '[Favorites Page] Get Favorites Success',
  props<{ favorites: Offer[] }>()
);
export const getFavoritesFailure = createAction(
  '[Favorites Page] Get Favorites Failure',
  props<{ error: string }>()
);
export const updateFavoriteStatus = createAction(
  '[Favorites Page] Update Favorite Status',
  props<{ status: boolean; id: string }>()
);
