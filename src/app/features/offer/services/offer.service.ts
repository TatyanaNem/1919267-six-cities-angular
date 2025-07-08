import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '@app/features/offers/models';
import { APIRoute, BACKEND_URL, REQUEST_TIMEOUT } from '@app/const';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}
  getActiveOffer(id: string) {
    return this.http
      .get<Offer>(`${BACKEND_URL}${APIRoute.Offers}/${id}`)
      .pipe(timeout(REQUEST_TIMEOUT));
  }

  getNearbyOffers(id: string) {
    return this.http
      .get<Offer[]>(
        `${BACKEND_URL}${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`
      )
      .pipe(timeout(REQUEST_TIMEOUT));
  }
}
