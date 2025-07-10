import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Offer } from '@app/features/offers/models';
import { LayoutComponent } from '@app/core/layout';
import { groupOffersByLocation } from '@app/shared/utils';
import { OfferCardComponent } from '@app/shared/components';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { selectFavorites } from '@app/features/favorites/favorites-slice';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  imports: [OfferCardComponent, LayoutComponent],
  templateUrl: './favorites-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {
    this.favorites$ = this.store
      .select(selectFavorites)
      .pipe(takeUntil(this._destroy$));
  }

  private readonly _destroy$ = new Subject<void>();
  favoritesByCity: [string, Offer[]][] = [];
  favorites$: Observable<Offer[]>;

  ngOnInit(): void {
    this.favorites$
      .pipe(
        map((favorites: Offer[]) =>
          favorites.filter((offer) => offer.isFavorite)
        ),
        switchMap((filteredFavorites: Offer[]) =>
          of(groupOffersByLocation(filteredFavorites))
        )
      )
      .subscribe((groupedFavorites: Record<string, Offer[]>) => {
        this.favoritesByCity = Object.entries(groupedFavorites);
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
