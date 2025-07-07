import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as OfferActions from '@app/features/offer/offer-slice';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { Offer } from '@app/features/offers/models';
import { OfferService } from '../services';

@Injectable({ providedIn: 'root' })
export class ActiveOfferEffects {
  actions$ = inject(Actions);
  offerService = inject(OfferService);

  getActiveOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferActions.getActiveOffer.type),
      mergeMap(({ id }) =>
        this.offerService.getActiveOffer(id).pipe(
          map((offer: Offer) => OfferActions.getActiveOfferSuccess({ offer })),
          catchError((error) =>
            of(OfferActions.getActiveOfferFailure({ error: error.message }))
          )
        )
      )
    )
  );

  getNearbyOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferActions.getNearbyOffers.type),
      mergeMap(({ id }) =>
        this.offerService.getNearbyOffers(id).pipe(
          map((nearByOffers: Offer[]) =>
            OfferActions.getNearbyOffersSuccess({ nearByOffers })
          ),
          catchError((error) =>
            of(OfferActions.getNearbyOffersFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
