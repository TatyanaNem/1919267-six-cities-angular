import { Component, Input } from '@angular/core';
import { Host } from '../../../../models/host';

@Component({
  selector: 'app-host-user',
  imports: [],
  templateUrl: './host-user.component.html',
  styleUrl: './host-user.component.css',
})
export class HostUserComponent {
  @Input() hostUser: Host = {
    avatarUrl: '',
    id: 1,
    isPro: false,
    name: '',
  };
}
