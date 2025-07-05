import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { rootReducers } from './store';
import { provideEffects } from '@ngrx/effects';
import { OffersEffects } from './features/offers/offers-slice/effects';
import { FavoritesEffects } from './features/favorites/favorites-slice/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideStore(rootReducers),
    provideStoreDevtools({
      maxAge: 25,
      autoPause: true,
    }),
    provideEffects(OffersEffects, FavoritesEffects),
  ],
};
