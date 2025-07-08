import { Offer } from '@app/features/offers/models';

export function groupOffersByLocation(items: Offer[]): Record<string, Offer[]> {
  return items.reduce<Record<string, Offer[]>>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);

    return acc;
  }, {});
}
