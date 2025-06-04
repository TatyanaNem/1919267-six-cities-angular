import { Component, Input } from '@angular/core';
import { Offer } from '../../../types/offer';
import { PluralEndingPipe } from '../../shared/pipes/plural-ending.pipe';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

@Component({
  selector: 'app-main-block',
  imports: [PluralEndingPipe, OfferCardComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
})
export class MainBlockComponent {
  @Input() offers: Offer[] = [];
}
