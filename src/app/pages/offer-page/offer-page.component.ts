import { Component, OnInit } from '@angular/core';
import { BookmarkButtonComponent } from '../../shared/bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../../shared/premium-mark/premium-mark.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../shared/types/offer';
import { offers } from '../../../mocks/offers';
import { GetRatingPipe } from '../../shared/pipes/get-rating.pipe';
import { PluralEndingPipe } from '../../shared/pipes/plural-ending.pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HostUserComponent } from './components/host-user/host-user.component';
import { ReviewsBlockComponent } from '../../features/reviews-block/reviews-block.component';
import { OfferGalleryComponent } from './components/offer-gallery/offer-gallery.component';
import { NearPlacesBlockComponent } from '../../features/near-places-block/near-places-block.component';

@Component({
  selector: 'app-offer-page',
  imports: [
    CommonModule,
    BookmarkButtonComponent,
    PremiumMarkComponent,
    HeaderComponent,
    GetRatingPipe,
    PluralEndingPipe,
    TitleCasePipe,
    HostUserComponent,
    ReviewsBlockComponent,
    OfferGalleryComponent,
    NearPlacesBlockComponent,
  ],
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.css',
})
export class OfferPageComponent implements OnInit {
  offerId: string | null = null;
  currentOffer: Offer | undefined;
  offers: Offer[] = offers;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('offerId');

    if (this.offerId) {
      this.currentOffer = this.offers.find(
        (offer) => offer.id === this.offerId
      );
    }
  }
}
