import { Component } from '@angular/core';

import { offers } from '../../../../mocks/offers';
import { OfferCardComponent } from '@app/features/offers/components';
import { Offer } from '@app/features/offers/models';

@Component({
  selector: 'app-near-places-block',
  imports: [OfferCardComponent],
  templateUrl: './near-places-block.component.html',
  styleUrl: './near-places-block.component.css',
})
export class NearPlacesBlockComponent {
  nearOffers: Offer[] = offers.slice(0, 3);
}
