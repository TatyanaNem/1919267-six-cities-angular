import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityMap } from '../../../../shared/constants';
import { City } from '../../../../shared/types/city';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input() currentCity: City = CityMap.Paris;
  @Output() changeCity = new EventEmitter<City>();
  cities = Object.values(CityMap);

  onSelectCity(city: City) {
    this.changeCity.emit(city);
  }
}
