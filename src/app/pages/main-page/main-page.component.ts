import { Component } from '@angular/core';
import { Offer } from '../../../types/offer';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { offers } from '../../../mocks/offers';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [OfferCardComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  offers: Offer[] = offers;
}
