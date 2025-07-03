import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer';
import { OfferCardComponent } from '../../components/offer-card/offer-card.component';
import { LayoutComponent } from '../../../../core/layout/layout.component';
import { offers } from '../../mocks/offers';

@Component({
  selector: 'app-favorites-page',
  imports: [OfferCardComponent, LayoutComponent],
  templateUrl: './favorites-page.component.html',
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
