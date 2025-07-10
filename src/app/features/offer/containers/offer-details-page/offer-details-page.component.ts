import { Component, OnDestroy, OnInit } from '@angular/core';
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
import {
  combineLatest,
  EMPTY,
  map,
  Observable,
  of,
  shareReplay,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { ReviewsBlockComponent } from '@app/features/reviews/containers';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { selectNearbyOffers } from '../../offer-slice';

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
export class OfferDetailsPageComponent implements OnInit, OnDestroy {
  offerId = '';
  currentOffer$: Observable<Offer> = EMPTY;
  combinedOffers$: Observable<Offer[]> = EMPTY;
  nearbyOffers$: Observable<Offer[]>;
  private readonly _destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private store: Store<AppState>
  ) {
    this.nearbyOffers$ = this.store
      .select(selectNearbyOffers)
      .pipe(takeUntil(this._destroy$));
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.offerId = params.get('offerId') || ''; // Получаем offerId из маршрута
          return combineLatest([
            (this.nearbyOffers$ = this.offerService.getNearbyOffers(
              this.offerId
            )),
            (this.currentOffer$ = this.offerService.getActiveOffer(
              this.offerId
            )),
          ]);
        }),
        map(([nearbyOffers, activeOffer]) => {
          const allOffers = [...nearbyOffers];
          if (activeOffer) {
            allOffers.push(activeOffer);
          }
          return allOffers;
        }),
        shareReplay(1),
        takeUntil(this._destroy$)
      )
      .subscribe((offers) => {
        this.combinedOffers$ = of(offers);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
