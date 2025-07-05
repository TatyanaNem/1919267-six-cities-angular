import { createAction, props } from '@ngrx/store';
import { Offer } from '../models/offer';
import { Cities } from '../../../shared/enums/cities.enum';

export const getOffers = createAction('[Main Offers Page] Get Offers');
export const getOffersSuccess = createAction(
  '[Main Offers Page] Get Offers Success',
  props<{ offers: Offer[] }>()
);
export const getOffersFailure = createAction(
  '[Main Offers Page] Get Offers Failure',
  props<{ error: string }>()
);
export const setCurrentCity = createAction(
  '[Main Offers Page] Set Current City',
  props<{ city: Cities }>()
);
export const updateFavoriteStatus = createAction(
  '[Offer] Update Favorite Status',
  props<{ status: boolean; id: string }>()
);
