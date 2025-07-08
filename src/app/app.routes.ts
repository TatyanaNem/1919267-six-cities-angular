import { Routes } from '@angular/router';
import { MainPageComponent } from '@app/features/offers/containers';
import { AuthGuard } from '@app/features/auth/guards';
import { AppRoute } from './app.const';

export const routes: Routes = [
  {
    path: AppRoute.Main,
    component: MainPageComponent,
    title: 'Main page',
  },
  {
    path: AppRoute.Offer,
    loadComponent: () =>
      import(
        './features/offer/containers/offer-details-page/offer-details-page.component'
      ).then((c) => c.OfferDetailsPageComponent),
    title: 'Offer page',
  },
  {
    path: AppRoute.Favorites,
    loadComponent: () =>
      import(
        './features/favorites/containers/favorites-page/favorites-page.component'
      ).then((c) => c.FavoritesPageComponent),
    title: 'Favorites page',
    canActivate: [AuthGuard],
  },
  {
    path: AppRoute.Login,
    loadComponent: () =>
      import('./features/auth/containers/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
    title: 'Login page',
  },
  {
    path: AppRoute.NotFound,
    loadComponent: () =>
      import('./core/containers/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
    title: 'Not found page',
  },
];
