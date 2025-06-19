import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offer } from '../../../../shared/types/offer';
import { PluralEndingPipe } from '../../../../shared/pipes/plural-ending.pipe';
import { OfferCardComponent } from '../../../../shared/components/offer-card/offer-card.component';

@Component({
  selector: 'app-main-block',
  imports: [PluralEndingPipe, OfferCardComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
})
export class MainBlockComponent {
  @Input() offers: Offer[] = [];
  @Output() setActiveId = new EventEmitter<string | null>();

  onMouseOnCard(id: string) {
    this.setActiveId.emit(id);
  }

  onMouseLeaveCard() {
    this.setActiveId.emit(null);
  }
}
