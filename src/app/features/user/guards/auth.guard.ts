import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationStatus } from '@app/const';
import { Store } from '@ngrx/store';
import { isAuthSelector } from '../user-slice/selectors';
import { AppState } from '@app/store';
import { map, tap } from 'rxjs';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate() {
    return this.store.select(isAuthSelector).pipe(
      map((status) => status === AuthorizationStatus.Auth),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          this.userService.redirectUrl = this.router.url;
        }
      })
    );
  }
}
