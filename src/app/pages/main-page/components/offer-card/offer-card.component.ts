import { Component, Input } from '@angular/core';
import { Offer } from '../../../../../types/offer';
import { GetRatingPipe } from '../../../../pipes/get-rating.pipe';
import { BookmarkButtonComponent } from '../../../../shared/bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../../../../shared/premium-mark/premium-mark.component';

@Component({
  selector: 'app-offer-card',
  imports: [GetRatingPipe, BookmarkButtonComponent, PremiumMarkComponent],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css',
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
