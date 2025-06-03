import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getRating',
})
export class GetRatingPipe implements PipeTransform {
  transform(rating: number, maxRating = 5): string {
    return rating ? `${Math.round((rating / maxRating) * 100)}%` : '0%';
  }
}
