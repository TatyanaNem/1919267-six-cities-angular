import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = true;
  redirectUrl = '/';

  isAuthenticated() {
    return this.isAuth;
  }
}
