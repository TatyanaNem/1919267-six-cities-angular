import { Component, Input } from '@angular/core';
import { Cities } from '@app/const';

@Component({
  selector: 'app-main-block-empty',
  imports: [],
  templateUrl: './main-block-empty.component.html',
  styleUrl: './main-block-empty.component.css',
})
export class MainBlockEmptyComponent {
  @Input() currentCity!: Cities;
}
