import { Host } from '../../../../../models/host';

export interface Review {
  id: string;
  user: Host;
  rating: number;
  comment: string;
  date: string;
}
