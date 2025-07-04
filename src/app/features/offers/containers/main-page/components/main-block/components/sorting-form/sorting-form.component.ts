import { Component, OnInit } from '@angular/core';
import { SortingOptions } from '../../../../../../../../shared/enums/sorting-options.enum';

@Component({
  selector: 'app-sorting-form',
  imports: [],
  templateUrl: './sorting-form.component.html',
  styleUrl: './sorting-form.component.css',
})
export class SortingFormComponent implements OnInit {
  sortingOptions = Object.values(SortingOptions);
  selectedOption = SortingOptions.Popular;
  isFormOpened = false;
  isHovered: boolean[] = [];

  ngOnInit() {
    this.isHovered = Array.from(
      { length: this.sortingOptions.length },
      () => false
    );
  }

  get arrowStyle() {
    return {
      transform: `translateY(-50%) ${
        this.isFormOpened ? 'rotate(180deg)' : ''
      }`,
    };
  }

  setIsFormOpen() {
    this.isFormOpened = !this.isFormOpened;
  }

  setSelectedOption(item: SortingOptions) {
    this.selectedOption = item;
    this.isFormOpened = false;
  }
}
