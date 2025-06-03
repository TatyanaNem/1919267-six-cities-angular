import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Offer } from '../../../types/offer';
import { offers } from '../../../mocks/offers';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainBlockComponent } from '../../features/main-block/main-block.component';
import { MainBlockEmptyComponent } from '../../features/main-block-empty/main-block-empty.component';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    HeaderComponent,
    MainBlockComponent,
    MainBlockEmptyComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  offers: Offer[] = offers;
}
