import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
