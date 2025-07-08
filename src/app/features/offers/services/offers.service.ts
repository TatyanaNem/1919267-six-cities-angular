import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Offer } from '../models/offer';
import { HttpClient } from '@angular/common/http';
import { APIRoute, BACKEND_URL, REQUEST_TIMEOUT } from '@app/const';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}
  getOffers(): Observable<Offer[]> {
    return this.http
      .get<Offer[]>(`${BACKEND_URL}${APIRoute.Offers}`)
      .pipe(timeout(REQUEST_TIMEOUT));
  }
}
