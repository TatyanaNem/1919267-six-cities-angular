import { Component } from '@angular/core';
import { Cities } from '../../../../shared/enums/cities.enum';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  cities = Object.values(Cities);
  selectedCity: string = Cities.Paris;

  onSelectCity(city: string) {
    this.selectedCity = city;
  }
}
