import { Component, Input } from '@angular/core';
import { GetRatingPipe } from '@app/shared/pipes';
import { DatePipe } from '@angular/common';
import { Review } from '../../models';

@Component({
  selector: 'app-review-item',
  imports: [GetRatingPipe, DatePipe],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.css',
})
export class ReviewItemComponent {
  @Input() review: Review | null = null;
}
