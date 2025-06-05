import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = true;

  isAuthenticated() {
    return this.isAuth;
  }
}
