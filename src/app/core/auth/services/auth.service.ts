import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  isAuthenticated() {
    return this.isAuth;
  }
}
