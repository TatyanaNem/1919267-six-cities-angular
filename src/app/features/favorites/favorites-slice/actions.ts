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
  props<{ id: string; status: number }>()
);
export const updateFavoriteStatusSuccess = createAction(
  '[Favorites Page] Update Favorite Status Success',
  props<{ offer: Offer; status: number }>()
);
export const updateFavoriteStatusFailure = createAction(
  '[Favorites Page] Update Favorite Status Failure',
  props<{ error: string }>()
);
