import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size } from '@app/shared/types';

@Component({
  selector: 'app-bookmark-button',
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
})
export class BookmarkButtonComponent {
  @Input() block: 'place-card' | 'offer' = 'place-card';
  @Input() size: keyof Size = 'small';
  @Input() isFavorite!: boolean;
  @Output() updateFavoriteStatus = new EventEmitter<boolean>();

  public readonly bookmarkSize: Size = {
    small: { width: '18', height: '19' },
    large: { width: '31', height: '33' },
  } as const;

  onBookmarkClickHandler() {
    this.updateFavoriteStatus.emit(!this.isFavorite);
  }
}
