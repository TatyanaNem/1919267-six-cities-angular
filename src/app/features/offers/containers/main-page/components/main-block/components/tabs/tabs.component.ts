import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cities } from '../../../../../../../../shared/enums/cities.enum';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input() currentCity!: Cities;
  @Output() changeCity = new EventEmitter<Cities>();
  cities = Object.values(Cities);

  onSelectCity(city: Cities) {
    this.changeCity.emit(city);
  }
}
