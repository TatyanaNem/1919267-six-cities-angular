import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '@app/features/offers/models';
import { GetRatingPipe } from '@app/shared/pipes';
import { PluralEndingPipe } from '@app/shared/pipes';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HostUserComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { LayoutComponent } from '@app/core/layout';
import { NearPlacesBlockComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { MapComponent } from '@app/features/offers/components';
import { OfferGalleryComponent } from 'src/app/features/offer/containers/offer-details-page/components';
import { NotFoundBlockComponent } from 'src/app/core/containers/not-found-page/components/not-found-block/not-found-block.component';
import {
  BookmarkButtonComponent,
  PremiumMarkComponent,
} from '@app/shared/components';
import { OfferService } from '../../services';
import { Observable } from 'rxjs';
import { ReviewsBlockComponent } from '@app/features/reviews/containers';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { offersSelector } from '@app/features/offers/offers-slice';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferDetailsPageComponent implements OnInit {
  offerId = '';
  currentOffer$?: Observable<Offer>;
  offers$: Observable<Offer[]>;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private store: Store<AppState>
  ) {
    this.offers$ = this.store.select(offersSelector);
  }

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('offerId') ?? '';

    if (this.offerId) {
      this.currentOffer$ = this.offerService.getActiveOffer(this.offerId);
    }
  }
}
