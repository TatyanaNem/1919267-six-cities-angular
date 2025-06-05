import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Offer } from '../../shared/types/offer';
import { offers } from '../../../mocks/offers';
import { OfferCardComponent } from '../../features/main-block/components/offer-card/offer-card.component';

@Component({
  selector: 'app-favorites-page',
  imports: [HeaderComponent, FooterComponent, OfferCardComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css',
})
export class FavoritesPageComponent implements OnInit {
  favoriteOffers: [string, Offer[]][] = [];
  allOffers: Offer[] = offers;

  groupOffersByLocation(items: Offer[]): Record<string, Offer[]> {
    return items.reduce<Record<string, Offer[]>>((acc, current) => {
      const location = current.city.name;
      if (!(location in acc)) {
        acc[location] = [];
      }
      acc[location].push(current);

      return acc;
    }, {});
  }

  ngOnInit(): void {
    this.favoriteOffers = Object.entries(
      this.groupOffersByLocation(
        this.allOffers.filter((offer: Offer) => offer.isFavorite)
      )
    );
  }
}
