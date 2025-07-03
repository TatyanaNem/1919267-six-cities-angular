import { Cities } from '../../../../shared/enums/cities.enum';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer';
import { LayoutComponent } from '../../../../core/layout/layout.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MainBlockEmptyComponent } from './components/main-block-empty/main-block-empty.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { MapComponent } from '../../components/map/map.component';
import { CityMap } from '../../../../shared/constants';
import { Store } from '@ngrx/store';
import * as OffersActions from '../../offers-slice/actions';
import { Observable } from 'rxjs';
import { offersSelector } from '../../offers-slice/selectors';
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
export class MainPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.offers$ = this.store.select(offersSelector);
  }

  offers$: Observable<Offer[]>;

  currentCity = Cities.Amsterdam;
  cityForMap = CityMap[this.currentCity];
  activeOfferId: string | null = null;

  ngOnInit(): void {
    this.store.dispatch(OffersActions.getOffers());
  }

  onChangeCurrentCity(city: Cities) {
    this.currentCity = city;
    this.cityForMap = CityMap[this.currentCity];
  }

  onChangeActiveId(id: string | null) {
    this.activeOfferId = id;
  }
}
