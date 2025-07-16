import { createReducer, on } from '@ngrx/store';
import * as ReviewsActions from './actions/actions';
import { Review } from '../models';

export interface State {
  isLoading: boolean;
  reviews: Review[];
  error: string | null;
}

export const initialState: State = {
  isLoading: false,
  reviews: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ReviewsActions.getReviews, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ReviewsActions.getReviewsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    reviews: action.reviews,
  })),
  on(ReviewsActions.getReviewsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(ReviewsActions.sendReview, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ReviewsActions.sendReviewSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    reviews: [...state.reviews, action.review],
  })),
  on(ReviewsActions.sendReviewFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
