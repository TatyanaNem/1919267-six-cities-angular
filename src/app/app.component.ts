import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPageComponent],
  template: ` <app-main-page></app-main-page>`,
})
export class AppComponent {}
