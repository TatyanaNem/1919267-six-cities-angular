import { Host } from '@app/features/offers/models';

export interface Review {
  id: string;
  user: Host;
  rating: number;
  comment: string;
  date: string;
}
