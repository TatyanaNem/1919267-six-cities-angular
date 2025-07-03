import { Routes } from '@angular/router';
import { MainPageComponent } from './features/offers/containers/main-page/main-page.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

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
        './features/offers/containers/offer-details-page/offer-details-page.component'
      ).then((c) => c.OfferDetailsPageComponent),
    title: 'Offer page',
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import(
        './features/offers/containers/favorites-page/favorites-page.component'
      ).then((c) => c.FavoritesPageComponent),
    title: 'Favorites page',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/containers/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
    title: 'Login page',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/containers/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
    title: 'Not found page',
  },
];
