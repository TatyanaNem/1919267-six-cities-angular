import { Component } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { offers } from '../mocks/offers';

@Component({
  selector: 'app-root',
  imports: [MainPageComponent],
  template: ` <app-main-page [offers]="offers"></app-main-page>`,
})
export class AppComponent {
  offers = offers;
}
