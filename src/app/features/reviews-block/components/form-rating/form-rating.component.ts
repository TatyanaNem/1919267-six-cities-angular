import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-rating',
  imports: [],
  templateUrl: './form-rating.component.html',
  styleUrl: './form-rating.component.css',
})
export class FormRatingComponent {
  @Output() ratingUpdated = new EventEmitter();

  readonly ratingArray = [
    { title: 'perfect', value: 5 },
    { title: 'good', value: 4 },
    { title: 'not bad', value: 3 },
    { title: 'badly', value: 2 },
    { title: 'terribly', value: 1 },
  ];

  onChangeRating(value: number) {
    this.ratingUpdated.emit(value);
  }
}
