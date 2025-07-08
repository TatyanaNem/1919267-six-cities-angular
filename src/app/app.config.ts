import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { rootReducers } from './store';
import { provideEffects } from '@ngrx/effects';
import { OffersEffects } from './features/offers/offers-slice/effects';
import { FavoritesEffects } from './features/favorites/favorites-slice/effects';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ActiveOfferEffects } from './features/offer/offer-slice';
import { ReviewsEffects } from './features/reviews/reviews-slice';
import { errorInterceptor, tokenInterceptor } from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideStore(rootReducers),
    provideStoreDevtools({
      maxAge: 25,
      autoPause: true,
    }),
    provideEffects(
      OffersEffects,
      FavoritesEffects,
      ActiveOfferEffects,
      ReviewsEffects
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([tokenInterceptor, errorInterceptor])
    ),
  ],
};
