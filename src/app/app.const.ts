import { Location } from './features/offers/models/location';

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const CityMap: Record<Cities, Location> = {
  [Cities.Paris]: { latitude: 48.83635, longitude: 2.351499, zoom: 12 },
  [Cities.Cologne]: { latitude: 50.923361, longitude: 6.959974, zoom: 12 },
  [Cities.Brussels]: { latitude: 50.832557, longitude: 4.351697, zoom: 12 },
  [Cities.Amsterdam]: { latitude: 52.35454, longitude: 4.897976, zoom: 12 },
  [Cities.Hamburg]: { latitude: 53.530341, longitude: 10.000654, zoom: 12 },
  [Cities.Dusseldorf]: { latitude: 51.205402, longitude: 6.776314, zoom: 12 },
} as const;

enum AppRoute {
  Main = '',
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer/:offerId',
  NotFound = '**',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const DEFAULT_CITY = Cities.Paris;

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const MAX_NEARBY_OFFERS_COUNT = 3;
const MAX_SHOWN_REVIEWS = 10;

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  NearbyOffers = '/nearby',
  Favorite = '/favorite',
}

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

enum RequestStatus {
  Loading = 'Loading',
  Idle = 'Idle',
  Error = 'Error',
  Success = 'Success',
}

enum NameSpace {
  OffersData = 'OFFERS_DATA',
  OfferData = 'OFFER_DATA',
  ReviewData = 'REVIEW_DATA',
  UserData = 'USER_DATA',
  FavoritesData = 'FAVORITES_DATA',
  NearbyOffersData = 'NEARBY_OFFERS_DATA',
}

const HttpStatus = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
} as const;

const enum FavoriteStatus {
  Added = 1,
  Deleted = 0,
}

enum SortingOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first',
}

const DEFAULT_SORTING_OPTION = SortingOptions['Popular'];

const ACTION_TYPE_REDIRECT = 'app/redirectToRoute';

export {
  AppRoute,
  AuthorizationStatus,
  Cities,
  DEFAULT_CITY,
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  SortingOptions,
  DEFAULT_SORTING_OPTION,
  APIRoute,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  MAX_NEARBY_OFFERS_COUNT,
  MAX_SHOWN_REVIEWS,
  RequestStatus,
  NameSpace,
  HttpStatus,
  CityMap,
  FavoriteStatus,
  ACTION_TYPE_REDIRECT,
};
