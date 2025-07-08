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
import { UserService } from '@app/features/user/services';
import { AppRoute } from '@app/const';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoComponent, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  public favoritesCount$: Observable<number>;
  public user!: User | null;
  private subscription = new Subscription();
  public isLoginPage = false;

  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.favoritesCount$ = this.store
      .select(selectFavorites)
      .pipe(map((favorites) => favorites.length));

    this.subscription.add(
      this.userService.user$.subscribe((user) => {
        this.user = user;
      })
    );

    this.subscription.add(
      this.route.url.subscribe((segments) => {
        const path = segments.map((segment) => segment.path).join('/');
        this.isLoginPage = path === AppRoute.Login;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
