import { Component } from '@angular/core';
import { Offer } from '../../../types/offer';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { offers } from '../../../mocks/offers';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-main-page',
  imports: [OfferCardComponent, HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  offers: Offer[] = offers;
}
