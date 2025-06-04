import { Component } from '@angular/core';
import { Cities } from '../../shared/enums/cities.enum';

@Component({
  selector: 'app-locations',
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent {
  cities = Object.values(Cities);
  selectedCity: string = Cities.Paris;

  onSelectCity(city: string) {
    this.selectedCity = city;
  }
}
