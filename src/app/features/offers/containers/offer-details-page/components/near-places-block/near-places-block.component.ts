import { Component } from '@angular/core';
import { OfferCardComponent } from '../../../../components/offer-card/offer-card.component';
import { Offer } from '../../../../models/offer';
import { offers } from '../../../../mocks/offers';

@Component({
  selector: 'app-near-places-block',
  imports: [OfferCardComponent],
  templateUrl: './near-places-block.component.html',
  styleUrl: './near-places-block.component.css',
})
export class NearPlacesBlockComponent {
  nearOffers: Offer[] = offers.slice(0, 3);
}
