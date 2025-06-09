import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Review } from './types/review.type';
import { ReviewItemComponent } from './components/review-item/review-item.component';

@Component({
  selector: 'app-reviews-block',
  imports: [ReviewItemComponent],
  templateUrl: './reviews-block.component.html',
  styleUrl: './reviews-block.component.css',
})
export class ReviewsBlockComponent implements OnChanges {
  @Input() reviews: Review[] = [];
  sortedReviews: Review[] = [];
  readonly MAX_SHOWN_REVIEWS = 10;

  ngOnChanges(changes: SimpleChanges) {
    if ('reviews' in changes) {
      this.sortedReviews = [...this.reviews].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
  }

  getSortedReviews() {
    return this.sortedReviews.slice();
  }
}
