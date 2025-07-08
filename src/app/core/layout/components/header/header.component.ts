import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectFavorites } from '../../../../features/favorites/favorites-slice/selectors';
import { AppState } from '@app/store';
import { AsyncPipe } from '@angular/common';
import { User } from '@app/features/user/models';
import { AppRoute, AuthorizationStatus } from '@app/const';
import { isAuthSelector } from '@app/features/user/user-slice';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoComponent, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  public favoritesCount$: Observable<number>;
  public user!: User | null;
  private subscription!: Subscription;
  public isLoginPage = false;
  isAuth$: Observable<AuthorizationStatus>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.isAuth$ = this.store.select(isAuthSelector);

    this.favoritesCount$ = this.store
      .select(selectFavorites)
      .pipe(map((favorites) => favorites.length));

    this.subscription = this.route.url.subscribe((segments) => {
      const path = segments.map((segment) => segment.path).join('/');
      this.isLoginPage = path === AppRoute.Login;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
