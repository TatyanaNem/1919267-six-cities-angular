import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ReviewsActions from './actions/actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ReviewsService } from '../services';
import { Review } from '../models';

@Injectable({ providedIn: 'root' })
export class ReviewsEffects {
  getReviews$ = createEffect(
    (actions$ = inject(Actions), reviewsService = inject(ReviewsService)) =>
      actions$.pipe(
        ofType(ReviewsActions.getReviews),
        mergeMap(({ id }) => {
          return reviewsService.getReviews(id).pipe(
            map((reviews: Review[]) =>
              ReviewsActions.getReviewsSuccess({ reviews })
            ),
            catchError((error) =>
              of(ReviewsActions.getReviewsFailure({ error: error.message }))
            )
          );
        })
      )
  );

  sendReview$ = createEffect(
    (actions$ = inject(Actions), reviewsService = inject(ReviewsService)) =>
      actions$.pipe(
        ofType(ReviewsActions.sendReview),
        mergeMap(({ id, review }) => {
          return reviewsService.sendReview(id, review).pipe(
            map((review: Review) =>
              ReviewsActions.sendReviewSuccess({ review })
            ),
            catchError((error) =>
              of(ReviewsActions.sendReviewFailure({ error: error.message }))
            )
          );
        })
      )
  );
}
