import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Size } from '../../types/size';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  @Input() block: 'header' | 'footer' = 'header';
  size: keyof Size = 'large';

  public readonly logoSize: Size = {
    small: { width: '64', height: '33' },
    large: { width: '81', height: '41' },
  } as const;
}
