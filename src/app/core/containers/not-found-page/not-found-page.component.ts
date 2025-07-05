import { Component, Input } from '@angular/core';
import { NotFoundBlockComponent } from './components/not-found-block/not-found-block.component';
import { LayoutComponent } from '@app/core/layout';

@Component({
  selector: 'app-not-found-page',
  imports: [LayoutComponent, NotFoundBlockComponent],
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
  @Input() type: 'page' | 'offer' = 'page';

  pageContentVariants = {
    page: 'Sorry! The page is not found',
    offer: 'The offer with such ID is not found',
  };
}
