import { Component, OnDestroy, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectFavorites } from '../../../../features/favorites/favorites-slice/selectors';
import { AppState } from '@app/store';
import { User } from '@app/features/user/models';
import { AppRoute, AuthorizationStatus } from '@app/const';
import { isAuthSelector, selectUser } from '@app/features/user/user-slice';
import * as UserActions from '@app/features/user/user-slice/actions';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  public favoritesCount: Signal<number>;
  public user: Signal<User | null>;
  public isLoginPage = false;
  public isAuth: Signal<boolean>;

  private subscription = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.user = toSignal(this.store.select(selectUser), { initialValue: null });
    this.isAuth = toSignal(
      this.store
        .select(isAuthSelector)
        .pipe(map((status) => status === AuthorizationStatus.Auth)),
      { initialValue: false }
    );

    this.favoritesCount = toSignal(
      this.store
        .select(selectFavorites)
        .pipe(map((favorites) => favorites.length)),
      { initialValue: 0 }
    );

    this.subscription = this.route.url.subscribe((segments) => {
      const path = segments.map((segment) => segment.path).join('/');
      this.isLoginPage = path === AppRoute.Login;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.store.dispatch(UserActions.logout());
  }
}
