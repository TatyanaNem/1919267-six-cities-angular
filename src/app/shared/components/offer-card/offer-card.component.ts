import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Offer } from '@app/features/offers/models';
import { Size } from '@app/shared/types';
import { PremiumMarkComponent } from '../premium-mark/premium-mark.component';
import { GetRatingPipe } from '@app/shared/pipes';
import { Store } from '@ngrx/store';
import * as OffersActions from '@app/features/offers/offers-slice';
import * as FavoritesActions from '../../../features/favorites/favorites-slice/actions';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';

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
  constructor(private store: Store) {}
  @Input() offer!: Offer;
  @Input() block: 'cities' | 'favorites' | 'near-places' = 'cities';
  @Input() size: keyof Size = 'large';

  public readonly imageSize: Size = {
    small: { width: '150', height: '110' },
    large: { width: '260', height: '200' },
  } as const;

  updateFavoriteStatus(status: boolean) {
    this.store.dispatch(
      OffersActions.updateFavoriteStatus({ status, id: this.offer.id })
    );
    this.store.dispatch(
      FavoritesActions.updateFavoriteStatus({ status, id: this.offer.id })
    );
  }
}
