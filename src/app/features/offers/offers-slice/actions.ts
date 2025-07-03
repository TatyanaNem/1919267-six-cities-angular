import { createAction, props } from '@ngrx/store';
import { Offer } from '../models/offer';

export const getOffers = createAction('[Offers] Enter');
export const getOffersSuccess = createAction(
  '[Offers] Get Offers Success',
  props<{ offers: Offer[] }>()
);
export const getOffersFailure = createAction(
  '[Offers] Get Offers Failure',
  props<{ error: string }>()
);
