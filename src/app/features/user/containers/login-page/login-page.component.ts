import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '@app/core/layout';
import { LoginFormComponent } from '@app/features/user/components';
import { AuthService } from '../../services';
import { Router, RouterLink } from '@angular/router';
import { Cities, DEFAULT_CITY } from '@app/const';
import { getRandomArrayElement } from '@app/shared/utils';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import * as OffersActions from '@app/features/offers/offers-slice';

@Component({
  selector: 'app-login-page',
  imports: [LayoutComponent, LoginFormComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  public randomCity = DEFAULT_CITY;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.randomCity = getRandomArrayElement(Object.values(Cities));
  }

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  onRandomCityClick() {
    this.store.dispatch(
      OffersActions.setCurrentCity({ city: this.randomCity })
    );
  }
}
