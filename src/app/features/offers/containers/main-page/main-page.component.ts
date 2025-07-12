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
import { BehaviorSubject, filter, Observable, Subscription } from 'rxjs';
import { AppState } from '@app/store';
import { TabsComponent } from './components/main-block/components/tabs/tabs.component';
import {
  offersByCitySelector,
  selectIsLoading,
} from '@app/features/offers/offers-slice';
import { isAuthSelector } from '@app/features/user/user-slice';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    LayoutComponent,
    TabsComponent,
    MainBlockComponent,
    MainBlockEmptyComponent,
    MapComponent,
    LoaderComponent,
  ],
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnDestroy {
  public offers$: Observable<Offer[]>;
  public currentCity$ = new BehaviorSubject<Cities>(Cities.Paris);
  public cityForMap = CityMap[Cities.Paris];
  public activeOfferId: string | null = null;
  public isAuth$: Observable<AuthorizationStatus>;
  public isLoading$: Observable<boolean>;

  private subscription = new Subscription();

  constructor(private store: Store<AppState>) {
    this.offers$ = this.store.select(offersByCitySelector);
    this.isAuth$ = this.store.select(isAuthSelector);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.checkAuth());
    this.store.dispatch(OffersActions.getOffers());
    this.isAuth$ = this.store.select(isAuthSelector);

    this.subscription.add(
      this.isAuth$
        .pipe(
          filter(
            (status: AuthorizationStatus) => status === AuthorizationStatus.Auth
          )
        )
        .subscribe(() => this.store.dispatch(FavoritesActions.getFavorites()))
    );

    this.subscription.add(
      this.currentCity$.subscribe((city) => {
        this.cityForMap = CityMap[city];
      })
    );
  }

  onChangeCurrentCity(city: Cities) {
    this.store.dispatch(OffersActions.setCurrentCity({ city }));
    this.currentCity$.next(city);
  }

  onChangeActiveId(id: string | null) {
    this.activeOfferId = id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
