import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '@app/features/offers/models';
import { GetRatingPipe } from '@app/shared/pipes';
import { PluralEndingPipe } from '@app/shared/pipes';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HostUserComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { ReviewsBlockComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { LayoutComponent } from '@app/core/layout';
import { NearPlacesBlockComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { Review } from './components/reviews-block/types/review.type';
import { MapComponent } from '@app/features/offers/components';
import { OfferGalleryComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { offers } from '../../../offers/mocks/offers';
import { reviews } from '../../../offers/mocks/reviews';
import { NotFoundBlockComponent } from 'src/app/core/containers/not-found-page/components/not-found-block/not-found-block.component';
import {
  BookmarkButtonComponent,
  PremiumMarkComponent,
} from '@app/shared/components';
import { OfferService } from '../../services';

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

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('offerId') ?? '';

    if (this.offerId) {
      this.offerService.getActiveOffer(this.offerId);
    }
  }
}
