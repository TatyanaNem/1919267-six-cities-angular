import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortingOptions } from '../../../../../../../../shared/enums/sorting-options.enum';

@Component({
  selector: 'app-sorting-form',
  imports: [],
  templateUrl: './sorting-form.component.html',
  styleUrl: './sorting-form.component.css',
})
export class SortingFormComponent implements OnInit {
  @Input() selectedOption!: SortingOptions;
  @Output() changeSortingOption = new EventEmitter<SortingOptions>();
  sortingOptionsList = Object.values(SortingOptions);
  isFormOpened = false;
  isHovered: boolean[] = [];

  ngOnInit() {
    this.isHovered = Array.from(
      { length: this.sortingOptionsList.length },
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

  setSortingOption(item: SortingOptions) {
    this.changeSortingOption.emit(item);
    this.isFormOpened = false;
  }
}
