import { Component, OnInit } from '@angular/core';
import { PremiumMarkComponent } from '../../components/premium-mark/premium-mark.component';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../models/offer';
import { GetRatingPipe } from '../../../../shared/pipes/get-rating.pipe';
import { PluralEndingPipe } from '../../../../shared/pipes/plural-ending.pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HostUserComponent } from './components/host-user/host-user.component';
import { ReviewsBlockComponent } from './components/reviews-block/reviews-block.component';
import { LayoutComponent } from '../../../../core/layout/layout.component';
import { NearPlacesBlockComponent } from './components/near-places-block/near-places-block.component';
import { Review } from './components/reviews-block/types/review.type';
import { MapComponent } from '../../components/map/map.component';
import { NotFoundBlockComponent } from '../../../../core/containers/not-found-page/components/not-found-block/not-found-block.component';
import { OfferGalleryComponent } from './components/offer-gallery/offer-gallery.component';
import { BookmarkButtonComponent } from '../../components/bookmark-button/bookmark-button.component';
import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

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
    MapComponent,
    NotFoundBlockComponent,
  ],
  templateUrl: './offer-details-page.component.html',
})
export class OfferDetailsPageComponent implements OnInit {
  offerId = '';
  currentOffer: Offer | undefined;
  offers: Offer[] = offers;
  reviews: Review[] = reviews;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('offerId') ?? '';

    this.currentOffer = this.offers.find((offer) => offer.id === this.offerId);
  }
}
