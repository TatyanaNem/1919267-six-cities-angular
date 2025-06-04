import { Component, Input } from '@angular/core';
import { Size } from '../types/size';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmark-button',
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
})
export class BookmarkButtonComponent {
  @Input() block: 'place-card' | 'offer' = 'place-card';
  @Input() size: keyof Size = 'small';
  @Input() isFavorite = false;

  public readonly bookmarkSize: Size = {
    small: { width: '18', height: '19' },
    large: { width: '31', height: '33' },
  } as const;
}
