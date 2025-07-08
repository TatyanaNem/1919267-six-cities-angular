import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  APIRoute,
  AuthorizationStatus,
  BACKEND_URL,
  REQUEST_TIMEOUT,
} from '@app/const';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = AuthorizationStatus.Unknown;
  redirectUrl = '/';

  checkAuth(): Observable<User> {
    return this.http
      .get<User>(`${BACKEND_URL}${APIRoute.Login}`)
      .pipe(timeout(REQUEST_TIMEOUT));
  }
}
