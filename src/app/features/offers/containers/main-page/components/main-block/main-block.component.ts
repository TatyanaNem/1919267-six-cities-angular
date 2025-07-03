import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offer } from '../../../../models/offer';
import { PluralEndingPipe } from '../../../../../../shared/pipes/plural-ending.pipe';
import { OfferCardComponent } from '../../../../components/offer-card/offer-card.component';

@Component({
  selector: 'app-main-block',
  imports: [PluralEndingPipe, OfferCardComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
})
export class MainBlockComponent {
  @Input() offers: Offer[] = [];
  @Output() changeActiveId = new EventEmitter<string | null>();

  onMouseOnCard(id: string) {
    this.changeActiveId.emit(id);
  }

  onMouseLeaveCard() {
    this.changeActiveId.emit(null);
  }
}
