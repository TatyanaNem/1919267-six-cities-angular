import { Component, Input } from '@angular/core';
import { Offer } from '../../../../shared/types/offer';
import { BookmarkButtonComponent } from '../../../../shared/bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../../../../shared/premium-mark/premium-mark.component';
import { RouterLink } from '@angular/router';
import { GetRatingPipe } from '../../../../shared/pipes/get-rating.pipe';

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
}
