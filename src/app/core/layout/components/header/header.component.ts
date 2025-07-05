import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectFavorites } from '../../../../features/favorites/favorites-slice/selectors';
import { AppState } from '@app/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoComponent, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private store: Store<AppState>) {
    this.favoritesCount$ = this.store
      .select(selectFavorites)
      .pipe(map((favorites) => favorites.length));
  }

  favoritesCount$: Observable<number>;
}
