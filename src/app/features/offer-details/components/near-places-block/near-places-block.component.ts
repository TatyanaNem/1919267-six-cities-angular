import { Component } from '@angular/core';
import { OfferCardComponent } from '../../../../shared/offer-card/offer-card.component';
import { Offer } from '../../../../shared/types/offer';
import { offers } from '../../../../../mocks/offers';

@Component({
  selector: 'app-near-places-block',
  imports: [OfferCardComponent],
  templateUrl: './near-places-block.component.html',
  styleUrl: './near-places-block.component.css',
})
export class NearPlacesBlockComponent {
  nearOffers: Offer[] = offers.slice(0, 3);
}
