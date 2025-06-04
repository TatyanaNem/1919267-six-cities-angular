import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Main page',
  },
  {
    path: 'offer/:offerId',
    loadComponent: () =>
      import('./pages/offer-page/offer-page.component').then(
        (c) => c.OfferPageComponent
      ),
    title: 'Offer page',
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites-page/favorites-page.component').then(
        (c) => c.FavoritesPageComponent
      ),
    title: 'Favorites page',
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
    title: 'Login page',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
    title: 'Not found page',
  },
];
