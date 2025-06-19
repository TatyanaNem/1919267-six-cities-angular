import { Cities } from './enums/cities.enum';
import { City } from './types/city';

type CityMapRecord = Record<Cities, City>;

export const CityMap: CityMapRecord = {
  Paris: {
    name: Cities.Paris,
    location: { latitude: 48.83635, longitude: 2.351499, zoom: 12 },
  },
  Cologne: {
    name: Cities.Cologne,
    location: { latitude: 50.923361, longitude: 6.959974, zoom: 12 },
  },
  Brussels: {
    name: Cities.Brussels,
    location: { latitude: 50.832557, longitude: 4.351697, zoom: 12 },
  },
  Amsterdam: {
    name: Cities.Amsterdam,
    location: { latitude: 52.35454, longitude: 4.897976, zoom: 12 },
  },
  Hamburg: {
    name: Cities.Hamburg,
    location: { latitude: 53.530341, longitude: 10.000654, zoom: 12 },
  },
  Dusseldorf: {
    name: Cities.Dusseldorf,
    location: { latitude: 51.205402, longitude: 6.776314, zoom: 12 },
  },
} as const;
