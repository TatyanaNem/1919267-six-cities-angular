import { Cities } from './enums/cities.enum';
import { Location } from './types/location';

export const CityMap: Record<Cities, Location> = {
  [Cities.Paris]: { latitude: 48.83635, longitude: 2.351499, zoom: 12 },
  [Cities.Cologne]: { latitude: 50.923361, longitude: 6.959974, zoom: 12 },
  [Cities.Brussels]: { latitude: 50.832557, longitude: 4.351697, zoom: 12 },
  [Cities.Amsterdam]: { latitude: 52.35454, longitude: 4.897976, zoom: 12 },
  [Cities.Hamburg]: { latitude: 53.530341, longitude: 10.000654, zoom: 12 },
  [Cities.Dusseldorf]: { latitude: 51.205402, longitude: 6.776314, zoom: 12 },
} as const;
