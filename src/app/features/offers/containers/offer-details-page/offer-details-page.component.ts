import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '@app/features/offers/models';
import { GetRatingPipe } from '@app/shared/pipes';
import { PluralEndingPipe } from '@app/shared/pipes';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HostUserComponent } from '@app/features/offers/containers/offer-details-page/components';
import { ReviewsBlockComponent } from '@app/features/offers/containers/offer-details-page/components';
import { LayoutComponent } from '@app/core/layout';
import { NearPlacesBlockComponent } from '@app/features/offers/containers/offer-details-page/components';
import { Review } from './components/reviews-block/types/review.type';
import {
  MapComponent,
  PremiumMarkComponent,
} from '@app/features/offers/components';
import { OfferGalleryComponent } from '@app/features/offers/containers/offer-details-page/components';
import { BookmarkButtonComponent } from '@app/features/offers/components';
import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';
import { NotFoundBlockComponent } from 'src/app/core/containers/not-found-page/components/not-found-block/not-found-block.component';

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
