import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../store';
import { sortReviewsByDate } from '@app/shared/utils';
import { MAX_SHOWN_REVIEWS } from '@app/const';

export const selectFeature = (state: AppState) => state.REVIEWS_DATA;

export const selectAllReviews = createSelector(
  selectFeature,
  (state) => state.reviews
);

export const selectSortedReviews = createSelector(
  selectAllReviews,
  (reviews) => {
    return [...reviews].sort(sortReviewsByDate).slice(0, MAX_SHOWN_REVIEWS);
  }
);
