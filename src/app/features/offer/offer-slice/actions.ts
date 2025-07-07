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

export const getNearbyOffers = createAction(
  '[Offer Details Page] Get Nearby Offers',
  props<{ id: string }>()
);
export const getNearbyOffersSuccess = createAction(
  '[Offer Details Page] Get Nearby Offers Success',
  props<{ nearByOffers: Offer[] }>()
);
export const getNearbyOffersFailure = createAction(
  '[Offer Details Page] Get Nearby Offers Failure',
  props<{ error: string }>()
);
