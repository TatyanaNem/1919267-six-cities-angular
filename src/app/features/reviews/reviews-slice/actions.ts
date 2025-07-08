import { createAction, props } from '@ngrx/store';
import { Review } from '../models';

export const getReviews = createAction(
  '[Offer Details Page] Get Reviews',
  props<{ id: string }>()
);
export const getReviewsSuccess = createAction(
  '[Offer Details Page] Get Reviews Success',
  props<{ reviews: Review[] }>()
);
export const getReviewsFailure = createAction(
  '[Offer Details Page] Get Reviews Failure',
  props<{ error: string }>()
);
