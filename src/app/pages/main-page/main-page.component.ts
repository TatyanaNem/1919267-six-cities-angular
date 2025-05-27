import { Component, Input } from '@angular/core';
import { OfferCardComponent } from '../../main-page/components/offer-card/offer-card.component';
import { Offer } from '../../../types/offer';

@Component({
  selector: 'app-main-page',
  imports: [OfferCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  @Input() offers: Offer[] = [];
}
