import { Cities } from '../../../shared/enums/cities.enum';
import { Location } from './location';

export interface City {
  name: Cities;
  location: Location;
}
