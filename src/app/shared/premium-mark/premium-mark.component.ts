import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-mark',
  imports: [],
  templateUrl: './premium-mark.component.html',
})
export class PremiumMarkComponent {
  @Input() block: 'place-card' | 'offer' = 'place-card';
}
