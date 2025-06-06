import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../../core/layout/layout/layout.component';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, LayoutComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
})
export class NotFoundPageComponent {}
