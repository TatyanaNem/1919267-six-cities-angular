// Импортируем необходимые модули Angular
import {
  Component,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { City } from '../../types/city';
import { CityMap } from '../../constants';
import { Offer } from '../../types/offer';

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
  @Input() city: City = CityMap.Amsterdam;
  @Input() offers: Offer[] = [];
  @Input() hoveredOfferId: string | null = null;

  private map: L.Map | null = null;
  private markerLayer: L.LayerGroup<L.Marker> | null = null;

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.city.location.latitude, this.city.location.longitude],

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

  private addMarkers(map: L.Map): void {
    this.markerLayer = L.layerGroup().addTo(map);

    this.offers.forEach((point) => {
      const marker = L.marker(
        {
          lat: point.location.latitude,
          lng: point.location.longitude,
        },
        {
          icon:
            point.id === this.hoveredOfferId
              ? currentCustomIcon
              : defaultCustomIcon,
        }
      );

      this.markerLayer?.addLayer(marker);
    });
  }

  private moveToCity(map: L.Map) {
    map.flyTo(
      [this.city.location.latitude, this.city.location.longitude],
      this.city.location.zoom,
      { duration: 1, easeLinearity: 1 }
    );
  }

  private removeMarkers() {
    if (this.markerLayer !== null) {
      this.markerLayer.clearLayers(); // очистка группы
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
    if (this.map) {
      this.addMarkers(this.map);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('city' in changes && this.map) {
      this.moveToCity(this.map);
      this.removeMarkers();
      this.addMarkers(this.map);
    }

    if ('hoveredOfferId' in changes && this.map) {
      this.addMarkers(this.map);
    }
  }
}
