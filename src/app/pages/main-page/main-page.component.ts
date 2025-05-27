import { Component, Input } from '@angular/core';
import { Offer } from '../../../types/offer';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

@Component({
  selector: 'app-main-page',
  imports: [OfferCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  @Input() offers: Offer[] = [];
}
