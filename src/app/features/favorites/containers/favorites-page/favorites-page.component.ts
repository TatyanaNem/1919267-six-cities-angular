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
import { switchMap } from 'rxjs/operators';
import { selectFavorites } from '@app/features/favorites/favorites-slice';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  imports: [OfferCardComponent, LayoutComponent],
  templateUrl: './favorites-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  public favoritesByCity: [string, Offer[]][] = [];
  public favorites$: Observable<Offer[]>;

  private subscription = new Subscription();

  constructor(private store: Store<AppState>) {
    this.favorites$ = this.store.select(selectFavorites);
  }

  ngOnInit(): void {
    this.subscription = this.favorites$
      .pipe(
        switchMap((favorites: Offer[]) => of(groupOffersByLocation(favorites)))
      )
      .subscribe((groupedFavorites: Record<string, Offer[]>) => {
        this.favoritesByCity = Object.entries(groupedFavorites);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
