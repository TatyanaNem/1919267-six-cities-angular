import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Offer } from '@app/features/offers/models';
import { HttpClient } from '@angular/common/http';
import { APIRoute, BACKEND_URL, REQUEST_TIMEOUT } from '@app/const';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private http: HttpClient) {}
  getFavorites(): Observable<Offer[]> {
    return this.http
      .get<Offer[]>(`${BACKEND_URL}${APIRoute.Favorite}`)
      .pipe(timeout(REQUEST_TIMEOUT));
  }
}
