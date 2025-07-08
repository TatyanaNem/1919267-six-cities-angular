import { AuthorizationStatus, Cities, CityMap } from '@app/const';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Offer } from '@app/features/offers/models';
import { LayoutComponent } from '@app/core/layout';
import { MainBlockEmptyComponent } from './components/main-block-empty/main-block-empty.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { MapComponent } from '@app/features/offers/components';
import { Store } from '@ngrx/store';
import * as OffersActions from '@app/features/offers/offers-slice';
import * as FavoritesActions from '@app/features/favorites/favorites-slice';
import * as UserActions from '@app/features/user/user-slice/actions';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { AppState } from '@app/store';
import { TabsComponent } from './components/main-block/components/tabs/tabs.component';
import { offersByCitySelector } from '@app/features/offers/offers-slice';
import { isAuthSelector } from '@app/features/user/user-slice';
import { UserService } from '@app/features/user/services';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    LayoutComponent,
    TabsComponent,
    MainBlockComponent,
    MainBlockEmptyComponent,
    MapComponent,
  ],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private userService: UserService
  ) {
    this.offers$ = this.store.select(offersByCitySelector);
    this.isAuth$ = this.store.select(isAuthSelector);
  }

  offers$: Observable<Offer[]>;
  currentCity$ = new BehaviorSubject<Cities>(Cities.Paris);
  cityForMap = CityMap[Cities.Paris];
  activeOfferId: string | null = null;
  isAuth$: Observable<AuthorizationStatus>;

  ngOnInit(): void {
    this.store.dispatch(UserActions.checkAuth());
    this.store.dispatch(OffersActions.getOffers());

    if (this.userService.isAuthorized$) {
      this.store.dispatch(FavoritesActions.getFavorites());
    }

    this.currentCity$.pipe(takeUntil(this.destroy$)).subscribe((city) => {
      this.cityForMap = CityMap[city];
    });
  }

  onChangeCurrentCity(city: Cities) {
    this.store.dispatch(OffersActions.setCurrentCity({ city }));
    this.currentCity$.next(city);
  }

  onChangeActiveId(id: string | null) {
    this.activeOfferId = id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
