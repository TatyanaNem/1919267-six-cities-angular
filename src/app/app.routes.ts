import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main/pages/main-page/main-page.component';
import { AuthGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Main page',
  },
  {
    path: 'offer/:offerId',
    loadComponent: () =>
      import(
        './features/offer-details/pages/offer-details-page/offer-details-page.component'
      ).then((c) => c.OfferPageComponent),
    title: 'Offer page',
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import(
        './features/favorites/pages/favorites-page/favorites-page.component'
      ).then((c) => c.FavoritesPageComponent),
    title: 'Favorites page',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './features/login-form/pages/login-page/login-page.component'
      ).then((c) => c.LoginPageComponent),
    title: 'Login page',
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './features/errors/pages/not-found-page/not-found-page.component'
      ).then((c) => c.NotFoundPageComponent),
    title: 'Not found page',
  },
];
