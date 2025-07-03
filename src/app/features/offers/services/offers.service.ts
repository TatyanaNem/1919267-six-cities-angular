import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Offer } from '../models/offer';
import { offers } from '../mocks/offers';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  getOffers(): Observable<Offer[]> {
    return of(offers).pipe(delay(2000));
  }
}
