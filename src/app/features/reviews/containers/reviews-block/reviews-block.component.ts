import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { MAX_SHOWN_REVIEWS } from '@app/const';
import { ReviewFormComponent, ReviewItemComponent } from '../../components';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { reviewsSelector } from '@app/features/reviews/reviews-slice';
import { AsyncPipe } from '@angular/common';
import { ReviewsService } from '../../services';
import { sortReviewsByDate } from '@app/shared/utils';

@Component({
  selector: 'app-reviews-block',
  imports: [ReviewItemComponent, ReviewFormComponent, AsyncPipe],
  templateUrl: './reviews-block.component.html',
  styleUrl: './reviews-block.component.css',
})
export class ReviewsBlockComponent implements OnInit {
  @Input() offerId!: string;
  reviews$: Observable<Review[]>;
  readonly reviewsToShow = MAX_SHOWN_REVIEWS;

  constructor(
    private store: Store<AppState>,
    private reviewsService: ReviewsService
  ) {
    this.reviews$ = this.store.select(reviewsSelector);
  }

  ngOnInit(): void {
    this.loadSortedReviews();
  }

  loadSortedReviews(): void {
    this.reviews$ = this.reviewsService
      .getReviews(this.offerId)
      .pipe(map((reviews: Review[]) => [...reviews].sort(sortReviewsByDate)));
  }
}
