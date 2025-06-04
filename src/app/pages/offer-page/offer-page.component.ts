import { Component, input } from '@angular/core';
import { BookmarkButtonComponent } from '../../shared/bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../../shared/premium-mark/premium-mark.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-offer-page',
  imports: [BookmarkButtonComponent, PremiumMarkComponent, HeaderComponent],
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.css',
})
export class OfferPageComponent {
  isPremium = true;

  pageId = input.required<string>();
}
