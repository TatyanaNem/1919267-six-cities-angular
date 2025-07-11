import { Component, computed, Input } from '@angular/core';
import { MAX_NEARBY_OFFERS_COUNT } from '@app/const';
import { Offer } from '@app/features/offers/models';
import { OfferCardComponent } from '@app/shared/components';

@Component({
  selector: 'app-near-places-block',
  imports: [OfferCardComponent],
  templateUrl: './near-places-block.component.html',
  styleUrl: './near-places-block.component.css',
})
export class NearPlacesBlockComponent {
  @Input() nearbyOffers: Offer[] = [];

  displayedOffers = computed(() => {
    return this.nearbyOffers.slice(0, MAX_NEARBY_OFFERS_COUNT);
  });
}
