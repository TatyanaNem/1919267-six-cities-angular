import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Offer } from '@app/features/offers/models';
import { offers } from '../../offers/mocks/offers';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  getFavorites(): Observable<Offer[]> {
    return of(offers.filter((offer) => offer.isFavorite)).pipe(delay(2000));
  }
}
