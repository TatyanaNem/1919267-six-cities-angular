import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Offer } from '@app/features/offers/models';
import { Size } from '@app/shared/types';
import { BookmarkButtonComponent } from '@app/features/offers/components';
import { PremiumMarkComponent } from '../premium-mark/premium-mark.component';
import { GetRatingPipe } from '@app/shared/pipes';

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
  @Input() offer!: Offer;
  @Input() block: 'cities' | 'favorites' | 'near-places' = 'cities';
  @Input() size: keyof Size = 'large';

  public readonly imageSize: Size = {
    small: { width: '150', height: '110' },
    large: { width: '260', height: '200' },
  } as const;
}
