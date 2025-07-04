import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offer } from '../../../../models/offer';
import { PluralEndingPipe } from '../../../../../../shared/pipes/plural-ending.pipe';
import { OfferCardComponent } from '../../../../components/offer-card/offer-card.component';
import { Cities } from '../../../../../../shared/enums/cities.enum';
import { SortingFormComponent } from './components/sorting-form/sorting-form.component';

@Component({
  selector: 'app-main-block',
  imports: [PluralEndingPipe, OfferCardComponent, SortingFormComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
})
export class MainBlockComponent {
  @Input() offers: Offer[] = [];
  @Input() currentCity!: Cities;
  @Output() changeActiveId = new EventEmitter<string | null>();

  onMouseOnCard(id: string) {
    this.changeActiveId.emit(id);
  }

  onMouseLeaveCard() {
    this.changeActiveId.emit(null);
  }
}
