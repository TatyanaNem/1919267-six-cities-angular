import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '@app/features/offers/models';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}
  getActiveOffer(id: string) {
    return this.http.get<Offer>(
      `https://15.design.htmlacademy.pro/six-cities/offers/${id}`
    );
  }
}
