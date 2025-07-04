import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size } from '../../../../shared/types/size';

@Component({
  selector: 'app-bookmark-button',
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
})
export class BookmarkButtonComponent {
  @Input() block: 'place-card' | 'offer' = 'place-card';
  @Input() size: keyof Size = 'small';
  @Input() isFavorite!: boolean;

  public readonly bookmarkSize: Size = {
    small: { width: '18', height: '19' },
    large: { width: '31', height: '33' },
  } as const;
}
