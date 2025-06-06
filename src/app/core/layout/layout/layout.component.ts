import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  currentUrl = '';

  constructor(private router: ActivatedRoute) {
    const segments = this.router.snapshot.url;
    this.currentUrl = '/' + segments.map((segment) => segment.path).join('/');
  }

  ngOnInit(): void {
    console.log(this.currentUrl);
  }

  getCurrentRouteClass(url: string): string {
    console.log(url);
    switch (url) {
      case '/':
        return 'page page--gray page--main';
      case '/login':
        return 'page page--gray page--login';
      case '**':
        return 'page page--gray page--main';
      default:
        return 'page';
    }
  }
}
