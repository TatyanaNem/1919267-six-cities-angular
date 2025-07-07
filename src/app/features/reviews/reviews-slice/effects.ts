import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ReviewsActions from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ReviewsService } from '../services';
import { Review } from '../models';

@Injectable({ providedIn: 'root' })
export class ReviewsEffects {
  getOffers$ = createEffect(
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
}
