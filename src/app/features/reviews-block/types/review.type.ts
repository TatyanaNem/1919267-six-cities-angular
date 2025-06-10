import { Host } from '../../../shared/types/host';

export interface Review {
  id: string;
  user: Host;
  rating: number;
  comment: string;
  date: string;
}
