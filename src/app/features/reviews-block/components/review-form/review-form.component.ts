import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  imports: [FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
})
export class ReviewFormComponent {
  @ViewChild('reviewForm') form: NgForm | undefined;

  reviewFormData = {
    rating: 0,
    review: '',
  };

  readonly ratingArray = [
    { title: 'perfect', value: 5 },
    { title: 'good', value: 4 },
    { title: 'not bad', value: 3 },
    { title: 'badly', value: 2 },
    { title: 'terribly', value: 1 },
  ];

  onSubmit() {
    this.reviewFormData = this.form?.value;
  }
}
