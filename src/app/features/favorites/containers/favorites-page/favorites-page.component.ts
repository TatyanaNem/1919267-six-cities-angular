import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Offer } from '@app/features/offers/models';
import { LayoutComponent } from '@app/core/layout';
import { groupOffersByLocation } from '@app/shared/utils';
import { OfferCardComponent } from '@app/shared/components';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { selectFavorites } from '@app/features/favorites/favorites-slice';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-favorites-page',
  imports: [OfferCardComponent, LayoutComponent, AsyncPipe],
  templateUrl: './favorites-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPageComponent {
  public favoritesByCity$: Observable<[string, Offer[]][]>;

  constructor(private store: Store<AppState>) {
    this.favoritesByCity$ = this.store.select(selectFavorites).pipe(
      distinctUntilChanged(),
      map((favorites: Offer[]) => groupOffersByLocation(favorites)),
      map((groupedFavorites: Record<string, Offer[]>) =>
        Object.entries(groupedFavorites)
      )
    );
  }
}
