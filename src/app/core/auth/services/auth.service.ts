import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  redirectUrl = '/';

  isAuthenticated() {
    return this.isAuth;
  }
}
