import { createReducer, on } from '@ngrx/store';
import { Offer } from '@app/features/offers/models';
import * as OfferActions from '../offer-slice/actions';

export const offerFeatureKey = 'offer';

export interface State {
  isLoading: boolean;
  activeOffer: Offer | null;
  error: string | null;
}

export const initialState: State = {
  isLoading: false,
  activeOffer: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(OfferActions.getActiveOffer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(OfferActions.getActiveOfferSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    activeOffer: action.offer,
  })),
  on(OfferActions.getActiveOfferFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
