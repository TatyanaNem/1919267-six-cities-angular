import { ActionReducerMap } from '@ngrx/store';
import * as fromOffers from '../features/offers/offers-slice/reducers/offers.reducer';

export interface AppState {
  [fromOffers.offersFeatureKey]: fromOffers.State;
}

export const rootReducers: ActionReducerMap<AppState> = {
  [fromOffers.offersFeatureKey]: fromOffers.reducer,
};
