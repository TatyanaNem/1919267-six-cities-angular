import { Component, Input } from '@angular/core';
import { Review } from '../../types/review.type';
import { GetRatingPipe } from '../../../../../../../../shared/pipes/get-rating.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-review-item',
  imports: [GetRatingPipe, DatePipe],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.css',
})
export class ReviewItemComponent {
  @Input() review: Review | null = null;
}
