import { City } from '../models/city';
import { Host } from './host';
import { Location } from './location';

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export interface Offer {
  city: City;
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
  bedrooms: number;
  description: string;
  host: Host;
  images: string[];
  maxAdults: number;
}
