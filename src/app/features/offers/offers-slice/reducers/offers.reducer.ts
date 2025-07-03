import { createReducer, on } from '@ngrx/store';
import { Offer } from '../../models/offer';
import * as OffersActions from '../actions';

export const offersFeatureKey = 'offers';

export interface State {
  isLoading: boolean;
  offers: Offer[];
  error: string | null;
}

export const initialState: State = {
  isLoading: false,
  offers: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(OffersActions.getOffersSuccess, (state, action) => ({
    ...state,
    offers: action.offers,
  })),
  on(OffersActions.getOffersFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
