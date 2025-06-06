import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
