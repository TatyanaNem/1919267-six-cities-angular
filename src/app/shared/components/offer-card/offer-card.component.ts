import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Offer } from '../../types/offer';
import { Size } from '../../types/size';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../premium-mark/premium-mark.component';
import { GetRatingPipe } from '../../pipes/get-rating.pipe';

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
