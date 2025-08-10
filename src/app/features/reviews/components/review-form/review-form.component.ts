import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppState } from '@app/store';
import * as ReviewsActions from '@app/features/reviews/reviews-slice/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-review-form',
  imports: [ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
})
export class ReviewFormComponent {
  @Input() offerId!: string;

  public reviewForm: FormGroup;
  public readonly ratingMap = [
    { title: 'perfect', value: 5 },
    { title: 'good', value: 4 },
    { title: 'not bad', value: 3 },
    { title: 'badly', value: 2 },
    { title: 'terribly', value: 1 },
  ];

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      rating: this.fb.control<string>('', [Validators.required]),
      comment: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(300),
      ]),
    });
  }

  onSubmit() {
    if (this.reviewForm && this.reviewForm.value) {
      this.store.dispatch(
        ReviewsActions.sendReview({
          id: this.offerId,
          review: {
            rating: Number(this.reviewForm.value.rating),
            comment: this.reviewForm.value.comment,
          },
        })
      );
      this.reviewForm.reset({ rating: 0, review: '' });
    }
  }
}
