import { Component, OnInit } from '@angular/core';
import { BookmarkButtonComponent } from '../../../../shared/components/bookmark-button/bookmark-button.component';
import { PremiumMarkComponent } from '../../../../shared/components/premium-mark/premium-mark.component';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../../../shared/types/offer';
import { offers } from '../../../../../mocks/offers';
import { GetRatingPipe } from '../../../../shared/pipes/get-rating.pipe';
import { PluralEndingPipe } from '../../../../shared/pipes/plural-ending.pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HostUserComponent } from './components/host-user/host-user.component';
import { ReviewsBlockComponent } from '../../../reviews-block/reviews-block.component';
import { OfferGalleryComponent } from './components/offer-gallery/offer-gallery.component';
import { LayoutComponent } from '../../../../core/layout/layout/layout.component';
import { NearPlacesBlockComponent } from '../../components/near-places-block/near-places-block.component';
import { Review } from '../../../reviews-block/types/review.type';
import { reviews } from '../../../../../mocks/reviews';

@Component({
  selector: 'app-offer-page',
  imports: [
    CommonModule,
    LayoutComponent,
    BookmarkButtonComponent,
    PremiumMarkComponent,
    GetRatingPipe,
    PluralEndingPipe,
    TitleCasePipe,
    HostUserComponent,
    ReviewsBlockComponent,
    OfferGalleryComponent,
    NearPlacesBlockComponent,
  ],
  templateUrl: './offer-details-page.component.html',
})
export class OfferPageComponent implements OnInit {
  offerId = '';
  currentOffer: Offer | undefined;
  offers: Offer[] = offers;
  reviews: Review[] = reviews;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('offerId') || '';

    if (this.offerId) {
      this.currentOffer = this.offers.find(
        (offer) => offer.id === this.offerId
      );
    }
  }
}
