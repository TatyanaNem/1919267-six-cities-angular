import { Component, Input } from '@angular/core';
import { Offer } from '../../../../shared/types/offer';
import { PluralEndingPipe } from '../../../../shared/pipes/plural-ending.pipe';
import { OfferCardComponent } from '../../../../shared/offer-card/offer-card.component';

@Component({
  selector: 'app-main-block',
  imports: [PluralEndingPipe, OfferCardComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
})
export class MainBlockComponent {
  @Input() offers: Offer[] = [];
  currentOfferId: string | null = null;

  onMouseOnCard(id: string) {
    this.currentOfferId = id;
  }

  onMouseLeaveCard() {
    this.currentOfferId = null;
  }
}
