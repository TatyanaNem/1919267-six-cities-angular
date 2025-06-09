import { Component } from '@angular/core';
import { FormRatingComponent } from '../form-rating/form-rating.component';

@Component({
  selector: 'app-review-form',
  imports: [FormRatingComponent],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
})
export class ReviewFormComponent {
  rating = 0;

  onRatingChanged(value: number) {
    this.rating = value;
  }
}
