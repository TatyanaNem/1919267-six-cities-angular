import { Cities } from './../../../../shared/enums/cities.enum';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Offer } from '../../../../shared/types/offer';
import { offers } from '../../../../../mocks/offers';
import { LayoutComponent } from '../../../../core/layout/layout/layout.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { MainBlockEmptyComponent } from '../../components/main-block-empty/main-block-empty.component';
import { MainBlockComponent } from '../../components/main-block/main-block.component';
import { MapComponent } from '../../../../shared/components/map/map.component';
import { CityMap } from '../../../../shared/constants';

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
export class MainPageComponent {
  offers: Offer[] = offers;
  currentCity = Cities.Amsterdam;
  cityForMap = CityMap[this.currentCity];
  activeOfferId: string | null = null;

  onChangeCurrentCity(city: Cities) {
    this.currentCity = city;
    this.cityForMap = CityMap[this.currentCity];
  }

  onChangeActiveId(id: string | null) {
    this.activeOfferId = id;
  }
}
