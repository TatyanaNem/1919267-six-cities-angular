// Импортируем необходимые модули Angular
import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  @Input() block: 'cities' | 'offer' = 'cities';
  private map: L.Map | null = null;

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.348, 4.8945],

      zoom: 13,
    });

    const tiles = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 18,

        minZoom: 3,

        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );

    tiles.addTo(this.map);
  }
  ngAfterViewInit(): void {
    this.initMap();
  }
}
