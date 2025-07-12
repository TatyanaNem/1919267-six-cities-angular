import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIRoute, BACKEND_URL, REQUEST_TIMEOUT } from '@app/const';
import { Observable, tap, timeout } from 'rxjs';
import { Credentials } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  redirectUrl = '/';

  isUserAuthenticated() {
    return !!localStorage.getItem('six-cities-token');
  }

  checkAuth(): Observable<User> {
    return this.http
      .get<User>(`${BACKEND_URL}${APIRoute.Login}`)
      .pipe(timeout(REQUEST_TIMEOUT));
  }

  login({ email, password }: Credentials): Observable<User> {
    return this.http
      .post<User>(`${BACKEND_URL}${APIRoute.Login}`, { email, password })
      .pipe(timeout(REQUEST_TIMEOUT));
  }

  logout(): Observable<void> {
    return this.http.delete<void>(`${BACKEND_URL}${APIRoute.Logout}`).pipe(
      timeout(REQUEST_TIMEOUT),
      tap(() => {
        if (this.isUserAuthenticated() && this.router.url === '/favorites') {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
