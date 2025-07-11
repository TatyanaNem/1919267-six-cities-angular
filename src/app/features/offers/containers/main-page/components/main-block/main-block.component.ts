import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { Offer } from '@app/features/offers/models';
import { PluralEndingPipe } from '@app/shared/pipes';
import { Cities, DEFAULT_SORTING_OPTION, SortingOptions } from '@app/const';
import { SortingFormComponent } from './components/sorting-form/sorting-form.component';
import { sortingMap } from '@app/shared/utils';
import { OfferCardComponent } from '@app/shared/components';
@Component({
  selector: 'app-main-block',
  imports: [PluralEndingPipe, OfferCardComponent, SortingFormComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
})
export class MainBlockComponent {
  @Input() offers: Offer[] = [];
  @Input() currentCity!: Cities;
  @Output() changeActiveId = new EventEmitter<string | null>();
  public selectedOption = signal(DEFAULT_SORTING_OPTION);
  public sortedOffers = computed(() => {
    const sortingFn = sortingMap[this.selectedOption()];
    return sortingFn([...this.offers]);
  });

  onMouseOnCard(id: string) {
    this.changeActiveId.emit(id);
  }

  onMouseLeaveCard() {
    this.changeActiveId.emit(null);
  }

  oncChangeSortingOption(item: SortingOptions) {
    this.selectedOption.set(item);
  }
}
