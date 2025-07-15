import { createAction, props } from '@ngrx/store';
import { Review, ReviewFormData } from '../../models';

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
export const sendReview = createAction(
  '[Offer Details Page] Send Review',
  props<{ id: string; review: ReviewFormData }>()
);
export const sendReviewSuccess = createAction(
  '[Offer Details Page] Send Review Success',
  props<{ review: Review }>()
);
export const sendReviewFailure = createAction(
  '[Offer Details Page] Send Review Failure',
  props<{ error: string }>()
);
