import { Component } from '@angular/core';
import { BookmarkButtonComponent } from '../../shared/bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../../shared/premium-mark/premium-mark.component';

@Component({
  selector: 'app-offer-page',
  imports: [BookmarkButtonComponent, PremiumMarkComponent],
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.css',
})
export class OfferPageComponent {
  isPremium = true;
}
