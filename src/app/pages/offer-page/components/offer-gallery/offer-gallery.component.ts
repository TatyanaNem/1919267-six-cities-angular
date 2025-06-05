import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-gallery',
  imports: [],
  templateUrl: './offer-gallery.component.html',
  styleUrl: './offer-gallery.component.css',
})
export class OfferGalleryComponent {
  @Input() offerImages!: string[];
}
