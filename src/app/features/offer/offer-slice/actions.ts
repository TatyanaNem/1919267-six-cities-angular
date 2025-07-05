import { Offer } from '@app/features/offers/models';
import { createAction, props } from '@ngrx/store';

export const getActiveOffer = createAction(
  '[Offer Details Page] Get Active Offer',
  props<{ id: string }>()
);
export const getActiveOfferSuccess = createAction(
  '[Offer Details Page] Get Active Offer Success',
  props<{ offer: Offer }>()
);
export const getActiveOfferFailure = createAction(
  '[Offer Details Page] Get Active Offer Failure',
  props<{ error: string }>()
);
