import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-mark',
  imports: [],
  templateUrl: './premium-mark.component.html',
})
export class PremiumMarkComponent {
  block: 'place-card' | 'offer' = 'place-card';
}
