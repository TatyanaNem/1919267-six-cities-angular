import { Component } from '@angular/core';

import { offers } from '../../../../mocks/offers';
import { Offer } from '@app/features/offers/models';
import { OfferCardComponent } from '@app/shared/components';

@Component({
  selector: 'app-near-places-block',
  imports: [OfferCardComponent],
  templateUrl: './near-places-block.component.html',
  styleUrl: './near-places-block.component.css',
})
export class NearPlacesBlockComponent {
  nearOffers: Offer[] = offers.slice(0, 3);
}
