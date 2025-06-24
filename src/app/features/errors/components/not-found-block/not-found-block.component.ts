import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-block',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './not-found-block.component.html',
  styleUrl: './not-found-block.component.css',
})
export class NotFoundBlockComponent {
  @Input() type: 'page' | 'offer' = 'page';

  pageContentVariants = {
    page: 'Sorry! The page is not found',
    offer: 'The offer with such ID is not found',
  };
}
