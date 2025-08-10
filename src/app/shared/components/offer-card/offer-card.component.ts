import { Component, Input, Signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Offer } from '@app/features/offers/models';
import { Size } from '@app/shared/types';
import { PremiumMarkComponent } from '../premium-mark/premium-mark.component';
import { GetRatingPipe } from '@app/shared/pipes';
import { Store } from '@ngrx/store';
import * as FavoritesActions from '../../../features/favorites/favorites-slice/actions';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';
import { AppState } from '@app/store';
import { isAuthSelector } from '@app/features/user/user-slice';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppRoute, AuthorizationStatus } from '@app/const';

@Component({
  selector: 'app-offer-card',
  imports: [
    GetRatingPipe,
    BookmarkButtonComponent,
    PremiumMarkComponent,
    RouterLink,
  ],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css',
})
export class OfferCardComponent {
  constructor(private store: Store<AppState>, private router: Router) {
    this.isAuth = toSignal(
      this.store
        .select(isAuthSelector)
        .pipe(map((status) => status === AuthorizationStatus.Auth)),
      { initialValue: false }
    );
  }
  @Input() offer!: Offer;
  @Input() block: 'cities' | 'favorites' | 'near-places' = 'cities';
  @Input() size: keyof Size = 'large';

  public readonly imageSize: Size = {
    small: { width: '150', height: '110' },
    large: { width: '260', height: '200' },
  } as const;
  public isAuth: Signal<boolean>;

  updateFavoriteStatus(status: boolean) {
    if (!this.isAuth()) {
      this.router.navigate([AppRoute.Login]);
      return;
    }
    this.store.dispatch(
      FavoritesActions.updateFavoriteStatus({
        status: Number(status),
        id: this.offer.id,
      })
    );
  }
}
