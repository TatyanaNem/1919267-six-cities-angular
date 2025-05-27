import { Component, Input } from '@angular/core';
import { Offer } from '../../../../../types/offer';
import { GetRatingPipe } from '../../../../pipes/get-rating.pipe';

@Component({
  selector: 'app-offer-card',
  imports: [GetRatingPipe],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css',
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
