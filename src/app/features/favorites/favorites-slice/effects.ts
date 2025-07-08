import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FavoritesActions from '../favorites-slice/actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Offer } from '@app/features/offers/models';

@Injectable({ providedIn: 'root' })
export class FavoritesEffects {
  getFavorites$ = createEffect(
    (actions$ = inject(Actions), favoritesService = inject(FavoritesService)) =>
      actions$.pipe(
        ofType(FavoritesActions.getFavorites),
        mergeMap(() => {
          return favoritesService.getFavorites().pipe(
            map((favorites: Offer[]) =>
              FavoritesActions.getFavoritesSuccess({ favorites })
            ),
            catchError((error) =>
              of(FavoritesActions.getFavoritesFailure({ error: error.message }))
            )
          );
        })
      )
  );
}
