import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Offer } from '../models/offer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}
  getOffers(): Observable<Offer[]> {
    return this.http
      .get<Offer[]>(`https://15.design.htmlacademy.pro/six-cities/offers`)
      .pipe(map((offers) => offers));
  }
}
