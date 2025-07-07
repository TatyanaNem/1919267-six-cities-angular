import { SortingOptions } from '@app/const';
import { Offer } from '../../features/offers/models/offer';
import { Review } from '@app/features/reviews/models';

function sortByRating(itemA: Offer, itemB: Offer) {
  return itemB.rating - itemA.rating;
}

function sortFromLowToHigh(itemA: Offer, itemB: Offer) {
  return itemA.price - itemB.price;
}

function sortFromHighToLow(itemA: Offer, itemB: Offer) {
  return itemB.price - itemA.price;
}

export const sortingMap = {
  [SortingOptions.Popular]: (offers: Offer[]) => offers.slice(),
  [SortingOptions.HighToLow]: (offers: Offer[]) =>
    [...offers].sort(sortFromHighToLow),
  [SortingOptions.LowToHigh]: (offers: Offer[]) =>
    [...offers].sort(sortFromLowToHigh),
  [SortingOptions.TopRating]: (offers: Offer[]) =>
    [...offers].sort(sortByRating),
};

export function sortReviewsByDate(itemA: Review, itemB: Review) {
  return new Date(itemB.date).getTime() - new Date(itemA.date).getTime();
}
