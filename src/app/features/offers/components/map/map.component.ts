import {
  Component,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { CityMap } from '../../../../shared/constants';
import { Offer } from '../../models/offer';
import { Cities } from '../../../../shared/enums/cities.enum';

const defaultCustomIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = L.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() block: 'cities' | 'offer' = 'cities';
  @Input() city = CityMap[Cities.Amsterdam];
  @Input() offers: Offer[] = [];
  @Input() activeOfferId: string | null = null;

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('city' in changes && this.map) {
      this.map.flyTo(
        [this.city.latitude, this.city.longitude],
        this.city.zoom,
        { duration: 1, easeLinearity: 1 }
      );
      this.removeMarkers();
      this.addMarkers();
    }

    if ('activeOfferId' in changes && this.map) {
      this.addMarkers();
    }
  }

  private map: L.Map | null = null;
  private markerLayer: L.LayerGroup<L.Marker> | null = null;

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.city.latitude, this.city.longitude],

      zoom: 12,
    });

    const tiles = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private addMarkers(): void {
    if (this.map) {
      this.markerLayer = L.layerGroup().addTo(this.map);
    }

    this.offers.forEach((point) => {
      const marker = L.marker(
        {
          lat: point.location.latitude,
          lng: point.location.longitude,
        },
        {
          icon:
            point.id === this.activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon,
        }
      );

      this.markerLayer?.addLayer(marker);
    });
  }

  private removeMarkers() {
    if (this.markerLayer !== null) {
      this.markerLayer.clearLayers();
    }
  }
}
