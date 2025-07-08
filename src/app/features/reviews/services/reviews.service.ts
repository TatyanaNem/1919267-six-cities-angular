import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIRoute, BACKEND_URL, REQUEST_TIMEOUT } from '@app/const';
import { Review } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private http: HttpClient) {}
  getReviews(id: string): Observable<Review[]> {
    return this.http
      .get<Review[]>(`${BACKEND_URL}${APIRoute.Reviews}/${id}`)
      .pipe(timeout(REQUEST_TIMEOUT));
  }
}
