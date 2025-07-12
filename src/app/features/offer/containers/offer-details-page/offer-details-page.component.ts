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
import {
  combineLatest,
  EMPTY,
  filter,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { ReviewsBlockComponent } from '@app/features/reviews/containers';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import {
  selectActiveOffer,
  selectIsLoading,
  selectNearbyOffers,
} from '../../offer-slice';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import * as OfferActions from '../../offer-slice/actions';
import { MAX_NEARBY_OFFERS_COUNT } from '@app/const';

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
    LoaderComponent,
  ],
  templateUrl: './offer-details-page.component.html',
})
export class OfferDetailsPageComponent implements OnInit, OnDestroy {
  public offerId = '';
  public currentOffer$: Observable<Offer | null>;
  public combinedOffers$: Observable<Offer[]> = EMPTY;
  public nearbyOffers$: Observable<Offer[]>;
  public isLoading$: Observable<boolean>;
  public offersForMap$: Observable<Offer[]>;

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.currentOffer$ = this.store.select(selectActiveOffer);
    this.nearbyOffers$ = this.store.select(selectNearbyOffers);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.offersForMap$ = combineLatest([
      this.currentOffer$,
      this.nearbyOffers$.pipe(
        map((nearby) => nearby.slice(0, MAX_NEARBY_OFFERS_COUNT))
      ),
    ]).pipe(
      map(([currentOffer, nearbyOffers]) => {
        let finalList = [];
        if (currentOffer) {
          finalList.push(currentOffer);
        }
        finalList = finalList.concat(nearbyOffers);
        return finalList;
      })
    );
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        filter((params) => !!params.get('offerId')), // Фильтруем пустые id
        map((params) => params.get('offerId') ?? '')
      )
      .subscribe((offerId) => {
        this.offerId = offerId;
        this.store.dispatch(OfferActions.getActiveOffer({ id: offerId }));
        this.store.dispatch(OfferActions.getNearbyOffers({ id: offerId }));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
