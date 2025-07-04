import { Cities } from '../../../../shared/enums/cities.enum';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Offer } from '../../models/offer';
import { LayoutComponent } from '../../../../core/layout/layout.component';
import { TabsComponent } from './components/main-block/components/tabs/tabs.component';
import { MainBlockEmptyComponent } from './components/main-block-empty/main-block-empty.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { MapComponent } from '../../components/map/map.component';
import { CityMap } from '../../../../shared/constants';
import { Store } from '@ngrx/store';
import * as OffersActions from '../../offers-slice/actions';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { offersByCitySelector } from '../../offers-slice/selectors';
import { AppState } from '../../../../store';

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
})
export class MainPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {
    this.offers$ = this.store.select(offersByCitySelector);
  }

  offers$: Observable<Offer[]>;
  currentCity$ = new BehaviorSubject<Cities>(Cities.Paris);
  cityForMap = CityMap[Cities.Paris];
  activeOfferId: string | null = null;

  ngOnInit(): void {
    this.store.dispatch(OffersActions.getOffers());
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
