import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OffersService } from '../services/offers.service';
import * as OffersActions from '../offers-slice/actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Offer } from '../models/offer';
import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OffersEffects {
  getOffers$ = createEffect(
    (actions$ = inject(Actions), offersService = inject(OffersService)) =>
      actions$.pipe(
        ofType(OffersActions.enter),
        mergeMap(() => {
          return offersService.getOffers().pipe(
            map((offers: Offer[]) =>
              OffersActions.getOffersSuccess({ offers })
            ),
            catchError((error) =>
              of(OffersActions.getOffersFailure({ error: error.message }))
            )
          );
        })
      )
  );
}
