import { Location } from './location';

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export interface City {
  name: (typeof CityName)[keyof typeof CityName];
  location: Location;
}
