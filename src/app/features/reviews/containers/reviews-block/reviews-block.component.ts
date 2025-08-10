import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { MAX_SHOWN_REVIEWS, AuthorizationStatus } from '@app/const';
import { ReviewFormComponent, ReviewItemComponent } from '../../components';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { AsyncPipe } from '@angular/common';
import * as ReviewsActions from '@app/features/reviews/reviews-slice/actions';
import { selectSortedReviews } from '../../reviews-slice';
import { isAuthSelector } from '@app/features/user/user-slice';

@Component({
  selector: 'app-reviews-block',
  imports: [ReviewItemComponent, ReviewFormComponent, AsyncPipe],
  templateUrl: './reviews-block.component.html',
  styleUrl: './reviews-block.component.css',
})
export class ReviewsBlockComponent implements OnInit {
  @Input() offerId = '';

  public reviews$: Observable<Review[]>;
  public readonly reviewsToShow = MAX_SHOWN_REVIEWS;
  public isAuth$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.reviews$ = this.store.select(selectSortedReviews);
    this.isAuth$ = this.store
      .select(isAuthSelector)
      .pipe(map((status) => status === AuthorizationStatus.Auth));
  }

  ngOnInit(): void {
    this.store.dispatch(ReviewsActions.getReviews({ id: this.offerId }));
  }
}
